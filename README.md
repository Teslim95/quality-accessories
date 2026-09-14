# Quality Accessories — Polished Full-Stack Package

This package preserves the existing product catalogue and page structure while adding a Node.js/Express backend, server-side order validation, event/service request APIs, security middleware, and a cleaner responsive stylesheet.

## Important
The real `images/` folder was not uploaded to ChatGPT, so it is intentionally not fabricated here. Copy your existing `Quality-Accessories/images/` folder into this package, replacing the placeholder text file.

## Run locally
1. Open this folder in VS Code.
2. Open the terminal in this folder.
3. Run `npm.cmd install`.
4. Run `npm.cmd start`.
5. Open `http://localhost:3000`.

The frontend can also be opened through the server instead of opening HTML files directly.

## Backend endpoints
- GET `/api/health`
- GET `/api/products`
- GET `/api/events`
- POST `/api/orders`
- POST `/api/event-requests`
- POST `/api/service-requests`

## Production notes
This version uses JSON files for a lightweight portfolio/demo database. Before a real store goes live, replace JSON storage with a managed database and configure a real payment provider using server-side secrets. Never put payment secret keys in frontend JavaScript.
