const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const DATA = path.join(ROOT, 'data');
const readJson = file => JSON.parse(fs.readFileSync(path.join(DATA, file), 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(path.join(DATA, file), JSON.stringify(value, null, 2));
const clean = value => String(value ?? '').trim();
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validPhone = value => /^[+0-9()\-\s]{7,20}$/.test(value);
const makeReference = () => `QA-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false, limit: '50kb' }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 1000,
  standardHeaders: 'draft-8',
  legacyHeaders: false
}));

app.get('/api/health', (req,res) => res.json({ ok:true, service:'Quality Accessories API' }));
app.get('/api/products', (req,res) => res.json(readJson('products.json')));
app.get('/api/events', (req,res) => res.json(readJson('events.json')));

app.post('/api/orders', (req,res) => {
  try {
    const customer = req.body?.customer || {};
    const name = clean(customer.name), phone = clean(customer.phone), email = clean(customer.email), address = clean(customer.address);
    if (name.length < 2 || name.length > 80) return res.status(400).json({message:'Please enter a valid full name.'});
    if (!validPhone(phone)) return res.status(400).json({message:'Please enter a valid phone number.'});
    if (!validEmail(email) || email.length > 120) return res.status(400).json({message:'Please enter a valid email address.'});
    if (address.length < 10 || address.length > 500) return res.status(400).json({message:'Please enter a complete delivery address.'});
    const requested = Array.isArray(req.body.items) ? req.body.items : [];
    if (!requested.length || requested.length > 50) return res.status(400).json({message:'Your cart is empty or too large.'});
    const catalog = readJson('products.json');
    const items = [];
    for (const row of requested) {
      const id = Number(row.id), quantity = Number(row.quantity);
      const product = catalog.find(p => p.id === id);
      if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) return res.status(400).json({message:'One or more cart items are invalid.'});
      items.push({ id:product.id, name:product.name, price:product.price, quantity, image:product.image });
    }
    const total = items.reduce((sum,item) => sum + item.price * item.quantity, 0);
    const order = { reference:makeReference(), createdAt:new Date().toISOString(), status:'pending_payment', paymentMethod:clean(req.body.paymentMethod) || 'bank_transfer', customer:{name,phone,email,address}, items, total };
    const orders = readJson('orders.json'); orders.push(order); writeJson('orders.json', orders);
    return res.status(201).json({message:'Your order has been received.', order:{reference:order.reference,total:order.total,status:order.status}});
  } catch (error) { console.error(error); return res.status(500).json({message:'Unable to create the order right now.'}); }
});

app.post('/api/event-requests', (req,res) => {
  try {
    const name=clean(req.body?.name), phone=clean(req.body?.phone), eventType=clean(req.body?.eventType), date=clean(req.body?.date), message=clean(req.body?.message);
    if(name.length<2||name.length>80)return res.status(400).json({message:'Please enter a valid name.'});
    if(!validPhone(phone))return res.status(400).json({message:'Please enter a valid phone number.'});
    if(!eventType)return res.status(400).json({message:'Please select an event type.'});
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return res.status(400).json({message:'Please select a valid event date.'});
    if(message.length>1000)return res.status(400).json({message:'Your message is too long.'});
    const record={reference:makeReference(),createdAt:new Date().toISOString(),name,phone,eventType,date,message};
    const rows=readJson('event-requests.json');rows.push(record);writeJson('event-requests.json',rows);res.status(201).json({message:'Thank you. Your event request has been received.',request:{reference:record.reference}});
  } catch(error){console.error(error);res.status(500).json({message:'Unable to send your event request right now.'});}
});

app.post('/api/service-requests', (req,res) => {
  try {
    const name=clean(req.body?.name),phone=clean(req.body?.phone),email=clean(req.body?.email),serviceType=clean(req.body?.serviceType),message=clean(req.body?.message);
    if(name.length<2||name.length>80)return res.status(400).json({message:'Please enter a valid name.'});
    if(!validPhone(phone))return res.status(400).json({message:'Please enter a valid phone number.'});
    if(!validEmail(email)||email.length>120)return res.status(400).json({message:'Please enter a valid email address.'});
    if(!serviceType)return res.status(400).json({message:'Please select a service.'});
    if(message.length<3||message.length>1000)return res.status(400).json({message:'Please describe your request.'});
    const record={reference:makeReference(),createdAt:new Date().toISOString(),name,phone,email,serviceType,message};
    const rows=readJson('service-requests.json');rows.push(record);writeJson('service-requests.json',rows);res.status(201).json({message:'Thank you. Your service request has been received.',request:{reference:record.reference}});
  } catch(error){console.error(error);res.status(500).json({message:'Unable to send your service request right now.'});}
});

app.use(express.static(ROOT, { extensions: ['html'] }));

app.get('/{*splat}', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Unexpected server error.' });
});

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Quality Accessories running on port ${PORT}`)
);