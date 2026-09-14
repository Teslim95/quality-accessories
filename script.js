// ======================================================
// QUALITY EVENTS, ACCESSORIES & SERVICES
// MAIN JAVASCRIPT
// ======================================================


// ======================================================
// PRODUCT CATALOGUE
// ======================================================

const products = [

    // ==================================================
    // JEWELRY
    // ==================================================

    {
        id: 1,
        slug: "gold-necklace",
        name: "Gold Necklace",
        price: 12000,
        category: "jewelry",
        image: "images/gold-necklace.jpg",
        rating: 5
    },

    {
        id: 2,
        slug: "beautiful-jewelry",
        name: "Beautiful Jewelry",
        price: 15000,
        category: "jewelry",
        image: "images/jewelries.jpg",
        rating: 5
    },

    {
        id: 3,
        slug: "fashion-jewelry",
        name: "Fashion Jewelry",
        price: 10000,
        category: "jewelry",
        image: "images/jewelry.jpg",
        rating: 4
    },

    {
        id: 4,
        slug: "bracelets",
        name: "Bracelets",
        price: 8000,
        category: "jewelry",
        image: "images/bracelets.jpg",
        rating: 5
    },


    // ==================================================
    // CLOTHES
    // ==================================================

    {
        id: 5,
        slug: "black-tshirt",
        name: "Black T-Shirt",
        price: 5000,
        category: "clothes",
        image: "images/black-tshirt.jpg",
        rating: 5
    },

    {
        id: 6,
        slug: "cardigan",
        name: "Cardigan",
        price: 10000,
        category: "clothes",
        image: "images/cardigan.jpg",
        rating: 4
    },

    {
        id: 7,
        slug: "beautiful-dress",
        name: "Beautiful Dress",
        price: 18000,
        category: "clothes",
        image: "images/Dresses.jpg.png",
        rating: 5
    },

    {
        id: 8,
        slug: "gown",
        name: "Gown",
        price: 20000,
        category: "clothes",
        image: "images/gawn.jpg",
        rating: 5
    },

    {
        id: 9,
        slug: "shirts",
        name: "Shirts",
        price: 7000,
        category: "clothes",
        image: "images/shirts.jpg",
        rating: 4
    },

    {
        id: 10,
        slug: "top-shirt",
        name: "Top Shirt",
        price: 8500,
        category: "clothes",
        image: "images/Top-shirt.jpg",
        rating: 5
    },

    {
        id: 11,
        slug: "trousers",
        name: "Trousers",
        price: 12000,
        category: "clothes",
        image: "images/trowers.jpg",
        rating: 4
    },

    {
        id: 12,
        slug: "white-top",
        name: "White Top",
        price: 6500,
        category: "clothes",
        image: "images/white-top.jpg",
        rating: 5
    },


    // ==================================================
    // BAGS
    // ==================================================

    {
        id: 13,
        slug: "modern-school-bag",
        name: "Modern School Bag",
        price: 18000,
        category: "bags",
        image: "images/Bags.jpg",
        rating: 5
    },

    {
        id: 14,
        slug: "handbag",
        name: "Handbag",
        price: 20000,
        category: "bags",
        image: "images/Handbag.jpg",
        rating: 5
    },

    {
        id: 15,
        slug: "fashion-purse",
        name: "Fashion Purse",
        price: 12000,
        category: "bags",
        image: "images/purse.jpg",
        rating: 4
    },


    // ==================================================
    // SHOES
    // ==================================================

    {
        id: 16,
        slug: "high-shoe",
        name: "High Shoe",
        price: 15000,
        category: "shoes",
        image: "images/high-shoe.jpg",
        rating: 5
    },
    // ADDITIONAL CLOTHES
{
    id: 17,
    slug: "black-tshirt-2",
    name: "Black T-Shirt",
    price: 5000,
    category: "clothes",
    image: "images/black-tshirt-2.jpg",
    rating: 5,
    keywords: ["black", "t-shirt", "tshirt", "shirt", "clothes"]
},
{
    id: 18,
    slug: "white-tshirt-2",
    name: "White T-Shirt",
    price: 5000,
    category: "clothes",
    image: "images/white-tshirt-2.jpg",
    rating: 5,
    keywords: ["white", "t-shirt", "tshirt", "shirt", "clothes"]
},
{
    id: 19,
    slug: "polo-shirt",
    name: "Polo Shirt",
    price: 7000,
    category: "clothes",
    image: "images/polo-shirt.jpg",
    rating: 5,
    keywords: ["polo", "shirt", "clothes"]
},
{
    id: 20,
    slug: "casual-shirt",
    name: "Casual Shirt",
    price: 7500,
    category: "clothes",
    image: "images/casual-shirt.jpg",
    rating: 4,
    keywords: ["casual", "shirt", "clothes"]
},
{
    id: 21,
    slug: "long-sleeve-shirt",
    name: "Long-Sleeve Shirt",
    price: 8000,
    category: "clothes",
    image: "images/long-sleeve-shirt.jpg",
    rating: 5,
    keywords: ["long sleeve", "shirt", "clothes"]
},
{
    id: 22,
    slug: "short-sleeve-shirt",
    name: "Short-Sleeve Shirt",
    price: 7000,
    category: "clothes",
    image: "images/short-sleeve-shirt.jpg",
    rating: 4,
    keywords: ["short sleeve", "shirt", "clothes"]
},
{
    id: 23,
    slug: "denim-shirt",
    name: "Denim Shirt",
    price: 9000,
    category: "clothes",
    image: "images/denim-shirt.jpg",
    rating: 5,
    keywords: ["denim", "shirt", "jean", "clothes"]
},
{
    id: 24,
    slug: "casual-top",
    name: "Casual Top",
    price: 6500,
    category: "clothes",
    image: "images/casual-top.jpg",
    rating: 4,
    keywords: ["casual", "top", "clothes"]
},
{
    id: 25,
    slug: "crop-top",
    name: "Crop Top",
    price: 6000,
    category: "clothes",
    image: "images/crop-top.jpg",
    rating: 5,
    keywords: ["crop", "top", "clothes"]
},
{
    id: 26,
    slug: "white-top-2",
    name: "White Top",
    price: 6500,
    category: "clothes",
    image: "images/white-top-2.jpg",
    rating: 5,
    keywords: ["white", "top", "clothes"]
},
{
    id: 27,
    slug: "blouse",
    name: "Blouse",
    price: 7500,
    category: "clothes",
    image: "images/blouse.jpg",
    rating: 5,
    keywords: ["blouse", "top", "women", "clothes"]
},
{
    id: 28,
    slug: "cardigan-2",
    name: "Cardigan",
    price: 10000,
    category: "clothes",
    image: "images/cardigan-2.jpg",
    rating: 4,
    keywords: ["cardigan", "sweater", "clothes"]
},
{
    id: 29,
    slug: "hoodie",
    name: "Hoodie",
    price: 12000,
    category: "clothes",
    image: "images/hoodie.jpg",
    rating: 5,
    keywords: ["hoodie", "sweatshirt", "clothes"]
},
{
    id: 30,
    slug: "sweatshirt",
    name: "Sweatshirt",
    price: 11000,
    category: "clothes",
    image: "images/sweatshirt.jpg",
    rating: 4,
    keywords: ["sweatshirt", "hoodie", "clothes"]
},
{
    id: 31,
    slug: "casual-dress",
    name: "Casual Dress",
    price: 15000,
    category: "clothes",
    image: "images/casual-dress.jpg",
    rating: 5,
    keywords: ["casual", "dress", "women", "clothes"]
},
{
    id: 32,
    slug: "maxi-dress",
    name: "Maxi Dress",
    price: 18000,
    category: "clothes",
    image: "images/maxi-dress.jpg",
    rating: 5,
    keywords: ["maxi", "dress", "women", "clothes"]
},
{
    id: 33,
    slug: "mini-dress",
    name: "Mini Dress",
    price: 16000,
    category: "clothes",
    image: "images/mini-dress.jpg",
    rating: 5,
    keywords: ["mini", "dress", "women", "clothes"]
},
{
    id: 34,
    slug: "bodycon-dress",
    name: "Bodycon Dress",
    price: 17000,
    category: "clothes",
    image: "images/bodycon-dress.jpg",
    rating: 5,
    keywords: ["bodycon", "dress", "women", "clothes"]
},
{
    id: 35,
    slug: "evening-gown",
    name: "Evening Gown",
    price: 25000,
    category: "clothes",
    image: "images/evening-gown.jpg",
    rating: 5,
    keywords: ["evening", "gown", "dress", "women", "clothes"]
},
{
    id: 36,
    slug: "long-gown",
    name: "Long Gown",
    price: 22000,
    category: "clothes",
    image: "images/long-gown.jpg",
    rating: 5,
    keywords: ["long", "gown", "dress", "women", "clothes"]
},
{
    id: 37,
    slug: "two-piece-outfit",
    name: "Two-Piece Outfit",
    price: 20000,
    category: "clothes",
    image: "images/two-piece-outfit.jpg",
    rating: 5,
    keywords: ["two piece", "outfit", "set", "clothes"]
},
{
    id: 38,
    slug: "straight-trousers",
    name: "Straight Trousers",
    price: 12000,
    category: "clothes",
    image: "images/straight-trousers.jpg",
    rating: 4,
    keywords: ["straight", "trousers", "pants", "clothes"]
},
{
    id: 39,
    slug: "wide-leg-trousers",
    name: "Wide-Leg Trousers",
    price: 13000,
    category: "clothes",
    image: "images/wide-leg-trousers.jpg",
    rating: 5,
    keywords: ["wide leg", "trousers", "pants", "clothes"]
},
{
    id: 40,
    slug: "jeans",
    name: "Jeans",
    price: 15000,
    category: "clothes",
    image: "images/jeans.jpg",
    rating: 5,
    keywords: ["jeans", "denim", "trousers", "pants", "clothes"]
},
{
    id: 41,
    slug: "cargo-trousers",
    name: "Cargo Trousers",
    price: 14000,
    category: "clothes",
    image: "images/cargo-trousers.jpg",
    rating: 5,
    keywords: ["cargo", "trousers", "pants", "clothes"]
},
{
    id: 42,
    slug: "shorts",
    name: "Shorts",
    price: 8000,
    category: "clothes",
    image: "images/shorts.jpg",
    rating: 4,
    keywords: ["shorts", "short", "clothes"]
},
{
    id: 43,
    slug: "skirt",
    name: "Skirt",
    price: 10000,
    category: "clothes",
    image: "images/skirt.jpg",
    rating: 5,
    keywords: ["skirt", "clothes"]
},
{
    id: 44,
    slug: "pencil-skirt",
    name: "Pencil Skirt",
    price: 11000,
    category: "clothes",
    image: "images/pencil-skirt.jpg",
    rating: 5,
    keywords: ["pencil", "skirt", "women", "clothes"]
},
{
    id: 45,
    slug: "jumpsuit",
    name: "Jumpsuit",
    price: 18000,
    category: "clothes",
    image: "images/jumpsuit.jpg",
    rating: 5,
    keywords: ["jumpsuit", "outfit", "clothes"]
},
{
    id: 46,
    slug: "traditional-outfit",
    name: "Traditional Outfit",
    price: 25000,
    category: "clothes",
    image: "images/traditional-outfit.jpg",
    rating: 5,
    keywords: ["traditional", "outfit", "african", "clothes"]
},
{
    id: 47,
    slug: "gold-necklace-2",
    name: "Gold Necklace",
    price: 12000,
    category: "jewelry",
    image: "images/gold-necklace-2.jpg",
    rating: 5,
    keywords: ["gold", "necklace", "jewelry", "chain", "accessories"]
},

{
    id: 48,
    slug: "silver-necklace",
    name: "Silver Necklace",
    price: 10000,
    category: "jewelry",
    image: "images/silver-necklace.jpg",
    rating: 5,
    keywords: ["silver", "necklace", "jewelry", "chain", "accessories"]
},

{
    id: 49,
    slug: "pendant-necklace",
    name: "Pendant Necklace",
    price: 11000,
    category: "jewelry",
    image: "images/pendant-necklace.jpg",
    rating: 5,
    keywords: ["pendant", "necklace", "jewelry", "chain", "accessories"]
},

{
    id: 50,
    slug: "pearl-necklace",
    name: "Pearl Necklace",
    price: 15000,
    category: "jewelry",
    image: "images/pearl-necklace.jpg",
    rating: 5,
    keywords: ["pearl", "necklace", "jewelry", "accessories"]
},

{
    id: 51,
    slug: "gold-bracelet-2",
    name: "Gold Bracelet",
    price: 10000,
    category: "jewelry",
    image: "images/gold-bracelet-2.jpg",
    rating: 5,
    keywords: ["gold", "bracelet", "jewelry", "accessories"]
},

{
    id: 52,
    slug: "charm-bracelet",
    name: "Charm Bracelet",
    price: 9000,
    category: "jewelry",
    image: "images/charm-bracelet.jpg",
    rating: 5,
    keywords: ["charm", "bracelet", "jewelry", "accessories"]
},

{
    id: 53,
    slug: "chain-bracelet",
    name: "Chain Bracelet",
    price: 8500,
    category: "jewelry",
    image: "images/chain-bracelet.jpg",
    rating: 4,
    keywords: ["chain", "bracelet", "jewelry", "accessories"]
},

{
    id: 54,
    slug: "bangle",
    name: "Bangle",
    price: 7000,
    category: "jewelry",
    image: "images/bangle.jpg",
    rating: 5,
    keywords: ["bangle", "bracelet", "jewelry", "accessories"]
},

{
    id: 55,
    slug: "stud-earrings",
    name: "Stud Earrings",
    price: 6000,
    category: "jewelry",
    image: "images/stud-earrings.jpg",
    rating: 5,
    keywords: ["stud", "earrings", "earring", "jewelry", "accessories"]
},

{
    id: 56,
    slug: "hoop-earrings",
    name: "Hoop Earrings",
    price: 7000,
    category: "jewelry",
    image: "images/hoop-earrings.jpg",
    rating: 5,
    keywords: ["hoop", "earrings", "earring", "jewelry", "accessories"]
},

{
    id: 57,
    slug: "drop-earrings",
    name: "Drop Earrings",
    price: 8000,
    category: "jewelry",
    image: "images/drop-earrings.jpg",
    rating: 5,
    keywords: ["drop", "earrings", "earring", "jewelry", "accessories"]
},

{
    id: 58,
    slug: "pearl-earrings",
    name: "Pearl Earrings",
    price: 9000,
    category: "jewelry",
    image: "images/pearl-earrings.jpg",
    rating: 5,
    keywords: ["pearl", "earrings", "earring", "jewelry", "accessories"]
},

{
    id: 59,
    slug: "gold-ring-2",
    name: "Gold Ring",
    price: 8500,
    category: "jewelry",
    image: "images/gold-ring-2.jpg",
    rating: 5,
    keywords: ["gold", "ring", "jewelry", "accessories"]
},

{
    id: 60,
    slug: "silver-ring",
    name: "Silver Ring",
    price: 7500,
    category: "jewelry",
    image: "images/silver-ring.jpg",
    rating: 5,
    keywords: ["silver", "ring", "jewelry", "accessories"]
},

{
    id: 61,
    slug: "fashion-ring",
    name: "Fashion Ring",
    price: 6500,
    category: "jewelry",
    image: "images/fashion-ring.jpg",
    rating: 5,
    keywords: ["fashion", "ring", "jewelry", "accessories"]
},

{
    id: 62,
    slug: "couple-ring",
    name: "Couple Ring",
    price: 12000,
    category: "jewelry",
    image: "images/couple-ring.jpg",
    rating: 5,
    keywords: ["couple", "ring", "wedding", "jewelry", "accessories"]
},

{
    id: 63,
    slug: "jewelry-set",
    name: "Jewelry Set",
    price: 20000,
    category: "jewelry",
    image: "images/jewelry-set.jpg",
    rating: 5,
    keywords: ["jewelry", "set", "necklace", "earrings", "accessories"]
},

{
    id: 64,
    slug: "anklet",
    name: "Anklet",
    price: 6000,
    category: "jewelry",
    image: "images/anklet.jpg",
    rating: 5,
    keywords: ["anklet", "ankle", "jewelry", "accessories"]
},

{
    id: 65,
    slug: "brooch",
    name: "Brooch",
    price: 5000,
    category: "jewelry",
    image: "images/brooch.jpg",
    rating: 5,
    keywords: ["brooch", "jewelry", "accessories"]
},

{
    id: 66,
    slug: "waist-chain",
    name: "Waist Chain",
    price: 9000,
    category: "jewelry",
    image: "images/waist-chain.jpg",
    rating: 5,
    keywords: ["waist", "chain", "jewelry", "accessories"]
},
{
    id: 67,
    slug: "sneakers",
    name: "Sneakers",
    price: 15000,
    category: "shoes",
    image: "images/sneakers.jpg",
    rating: 5,
    keywords: ["sneakers", "shoes", "footwear", "fashion"]
},

{
    id: 68,
    slug: "white-sneakers",
    name: "White Sneakers",
    price: 16000,
    category: "shoes",
    image: "images/white-sneakers.jpg",
    rating: 5,
    keywords: ["white", "sneakers", "shoes", "footwear", "fashion"]
},

{
    id: 69,
    slug: "black-sneakers",
    name: "Black Sneakers",
    price: 16000,
    category: "shoes",
    image: "images/black-sneakers.jpg",
    rating: 5,
    keywords: ["black", "sneakers", "shoes", "footwear", "fashion"]
},

{
    id: 70,
    slug: "running-shoes",
    name: "Running Shoes",
    price: 18000,
    category: "shoes",
    image: "images/running-shoes.jpg",
    rating: 5,
    keywords: ["running", "sports", "shoes", "footwear"]
},

{
    id: 71,
    slug: "casual-shoes",
    name: "Casual Shoes",
    price: 14000,
    category: "shoes",
    image: "images/casual-shoes.jpg",
    rating: 4,
    keywords: ["casual", "shoes", "footwear", "fashion"]
},

{
    id: 72,
    slug: "loafers",
    name: "Loafers",
    price: 17000,
    category: "shoes",
    image: "images/loafers.jpg",
    rating: 5,
    keywords: ["loafers", "shoes", "formal", "footwear"]
},

{
    id: 73,
    slug: "formal-shoes",
    name: "Formal Shoes",
    price: 20000,
    category: "shoes",
    image: "images/formal-shoes.jpg",
    rating: 5,
    keywords: ["formal", "shoes", "office", "footwear"]
},

{
    id: 74,
    slug: "high-heels",
    name: "High Heels",
    price: 18000,
    category: "shoes",
    image: "images/high-heels.jpg",
    rating: 5,
    keywords: ["high heels", "heels", "shoes", "women", "fashion"]
},

{
    id: 75,
    slug: "sandals",
    name: "Sandals",
    price: 10000,
    category: "shoes",
    image: "images/sandals.jpg",
    rating: 5,
    keywords: ["sandals", "shoes", "footwear", "fashion"]
},

{
    id: 76,
    slug: "slippers",
    name: "Slippers",
    price: 7000,
    category: "shoes",
    image: "images/slippers.jpg",
    rating: 4,
    keywords: ["slippers", "shoes", "footwear", "casual"]
},

{
    id: 77,
    slug: "boots",
    name: "Boots",
    price: 22000,
    category: "shoes",
    image: "images/boots.jpg",
    rating: 5,
    keywords: ["boots", "shoes", "footwear", "fashion"]
},

{
    id: 78,
    slug: "sports-shoes",
    name: "Sports Shoes",
    price: 19000,
    category: "shoes",
    image: "images/sports-shoes.jpg",
    rating: 5,
    keywords: ["sports", "shoes", "sneakers", "footwear"]
}
];


// ======================================================
// MONEY FORMATTER
// ======================================================

function formatMoney(amount) {

    return "₦" +
        Number(amount).toLocaleString("en-NG");

}


// ======================================================
// CREATE STAR RATING
// ======================================================

function createRating(rating) {

    return (
        "★".repeat(rating) +
        "☆".repeat(5 - rating)
    );

}


// ======================================================
// CREATE PRODUCT CARD
// ======================================================

function createProductCard(product) {

    return `
        <article class="product-card"
                 data-product-id="${product.id}">

            <div class="product-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >

                <button
                    type="button"
                    class="heart-button"
                    aria-label="Add ${product.name} to wishlist"
                    onclick="toggleWishlist(this)"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                <p class="price">
                    ${formatMoney(product.price)}
                </p>


                <p class="rating">
                    ${createRating(product.rating)}

                    <span>
                        (${product.rating}.0)
                    </span>
                </p>


                <button
                    type="button"
                    class="add-to-cart"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </article>
    `;

}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts(productList, containerId) {

    const container =
        document.getElementById(containerId);


    if (!container) {
        return;
    }


    if (!Array.isArray(productList) ||
        productList.length === 0) {

        container.innerHTML = `
            <div class="no-products">

                <div class="empty-cart-icon">
                    🔍
                </div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try searching for another product.
                </p>

            </div>
        `;

        return;
    }


    container.innerHTML =
        productList
            .map(product => createProductCard(product))
            .join("");

}


// ======================================================
// SHOP PAGE
// ======================================================

function loadShopProducts() {

    displayProducts(
        products,
        "shop-products"
    );

}


// ======================================================
// JEWELRY PAGE
// ======================================================

function loadJewelryProducts() {

    const jewelryProducts =
        products.filter(
            product =>
                product.category === "jewelry"
        );


    displayProducts(
        jewelryProducts,
        "jewelry-products"
    );

}


// ======================================================
// CLOTHES PAGE
// ======================================================

function loadClothesProducts() {

    const clothesProducts =
        products.filter(
            product =>
                product.category === "clothes"
        );


    displayProducts(
        clothesProducts,
        "clothes-products"
    );

}


// ======================================================
// HOME FEATURED PRODUCTS
// ======================================================

function loadFeaturedProducts() {

    const featuredProducts =
        products.slice(0, 3);


    const featuredContainer =
        document.getElementById(
            "featured-products"
        );


    if (featuredContainer) {

        displayProducts(
            featuredProducts,
            "featured-products"
        );

        return;
    }


    /*
        Your current index.html also contains
        three static featured products.

        Therefore, if the container above
        doesn't exist, we simply leave those
        existing HTML products alone.
    */

}


// ======================================================
// HOME PRODUCTS
// ======================================================

function loadHomeProducts() {

    const homeContainer =
        document.getElementById(
            "home-products"
        );


    if (!homeContainer) {

        return;

    }


    displayProducts(
        products.slice(3),
        "home-products"
    );

}


// ======================================================
// CART STORAGE
// ======================================================

let cart = JSON.parse(
    localStorage.getItem("teslimCart")
) || [];


// ======================================================
// SAVE CART
// ======================================================

function saveCart() {

    localStorage.setItem(
        "teslimCart",
        JSON.stringify(cart)
    );

}


// ======================================================
// CART TOTAL
// ======================================================

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            return total +
                (
                    Number(item.price) *
                    Number(item.quantity)
                );

        },
        0
    );

}


// ======================================================
// TOTAL ITEMS
// ======================================================

function getCartItemCount() {

    return cart.reduce(
        (total, item) => {

            return total +
                Number(item.quantity);

        },
        0
    );

}


// ======================================================
// UPDATE CART BADGE
// ======================================================

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cart-count"
        );


    if (!cartCount) {

        return;

    }


    cartCount.textContent =
        getCartItemCount();

}


// ======================================================
// FIND PRODUCT
// ======================================================

function findProduct(productIdentifier) {

    return products.find(
        product =>
            product.id === productIdentifier ||
            product.slug === productIdentifier
    );

}


// ======================================================
// ADD TO CART
// ======================================================

function addToCart(productIdentifier) {

    const product =
        findProduct(productIdentifier);


    if (!product) {

        console.error(
            "Product not found:",
            productIdentifier
        );

        return;

    }


    const existingProduct =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            slug: product.slug,

            name: product.name,

            price: product.price,

            category: product.category,

            image: product.image,

            rating: product.rating,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    /*
        Refresh the cart only if the
        cart container exists on the page.
    */

    displayCart();


    showNotification(
        `${product.name} added to your cart!`
    );

}


// ======================================================
// NOTIFICATION
// ======================================================

function showNotification(message) {

    const existing =
        document.querySelector(
            ".store-notification"
        );


    if (existing) {

        existing.remove();

    }


    const notification =
        document.createElement("div");


    notification.className =
        "store-notification notification";


    notification.innerHTML = `
        <span>
            ✅
        </span>

        <span>
            ${message}
        </span>
    `;


    document.body.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.remove();

        },
        2500
    );

}


// ======================================================
// DISPLAY CART
// ======================================================

function displayCart() {

    const cartContainer =
        document.getElementById(
            "cart-items"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    if (!cartContainer) {

        return;

    }


    // EMPTY CART

    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    You haven't added any products yet.
                </p>

                <br>

                <a
                    href="shop.html"
                    class="btn"
                >
                    🛍️ Continue Shopping
                </a>

            </div>

        `;


        if (totalElement) {

            totalElement.textContent =
                "₦0";

        }


        return;

    }


    // CART ITEMS

    cartContainer.innerHTML =
        cart.map(item => {

            const subtotal =
                Number(item.price) *
                Number(item.quantity);


            return `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="cart-item-image"
                    >


                    <div class="cart-item-info">

                        <h3>
                            ${item.name}
                        </h3>


                        <p class="cart-item-price">
                            ${formatMoney(item.price)}
                        </p>


                        <p>
                            Subtotal:
                            <strong>
                                ${formatMoney(subtotal)}
                            </strong>
                        </p>


                        <div class="quantity-controls">

                            <button
                                type="button"
                                onclick="decreaseQuantity(${item.id})"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                onclick="increaseQuantity(${item.id})"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>

                        </div>


                        <button
                            type="button"
                            class="remove-btn"
                            onclick="removeFromCart(${item.id})"
                        >
                            🗑️ Remove
                        </button>

                    </div>

                </div>

            `;

        }).join("");


    // TOTAL

    if (totalElement) {

        totalElement.textContent =
            formatMoney(
                getCartTotal()
            );

    }

}


// ======================================================
// INCREASE QUANTITY
// ======================================================

function increaseQuantity(productId) {

    const product =
        cart.find(
            item =>
                item.id === productId
        );


    if (!product) {

        return;

    }


    product.quantity += 1;


    saveCart();

    updateCartCount();

    displayCart();

}


// ======================================================
// DECREASE QUANTITY
// ======================================================

function decreaseQuantity(productId) {

    const product =
        cart.find(
            item =>
                item.id === productId
        );


    if (!product) {

        return;

    }


    if (product.quantity > 1) {

        product.quantity -= 1;

    } else {

        cart = cart.filter(
            item =>
                item.id !== productId
        );

    }


    saveCart();

    updateCartCount();

    displayCart();

}


// ======================================================
// REMOVE PRODUCT
// ======================================================

function removeFromCart(productId) {

    const product =
        cart.find(
            item =>
                item.id === productId
        );


    if (!product) {

        return;

    }


    cart = cart.filter(
        item =>
            item.id !== productId
    );


    saveCart();

    updateCartCount();

    displayCart();


    showNotification(
        `${product.name} removed from cart.`
    );

}


// ======================================================
// CLEAR CART
// ======================================================

function clearCart() {

    if (cart.length === 0) {

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to clear your cart?"
        );


    if (!confirmed) {

        return;

    }


    cart = [];


    saveCart();

    updateCartCount();

    displayCart();


    showNotification(
        "Your cart has been cleared."
    );

}


// ======================================================
// SEARCH
// ======================================================

function searchProducts(searchText) {

    const text =
        String(searchText || "")
            .toLowerCase()
            .trim();


    /*
        No search text means:
        show all products.
    */

    if (text === "") {

        loadShopProducts();

        updateSearchResultMessage(
            products.length,
            ""
        );

        return;

    }


    const results =
        products.filter(
            product => {

                const name =
                    product.name
                        .toLowerCase();

                const category =
                    product.category
                        .toLowerCase();

                const slug =
                    product.slug
                        .toLowerCase();


                return (
                    name.includes(text) ||
                    category.includes(text) ||
                    slug.includes(text)
                );

            }
        );


    displayProducts(
        results,
        "shop-products"
    );


    /*
        If the search is running from
        the home page, direct the user
        to the Shop page.
    */

    updateSearchResultMessage(
        results.length,
        text
    );

}


// ======================================================
// SEARCH RESULT MESSAGE
// ======================================================

function updateSearchResultMessage(
    resultCount,
    searchText
) {

    const message =
        document.getElementById(
            "search-result-message"
        );


    if (!message) {

        return;

    }


    if (!searchText) {

        message.textContent =
            `${resultCount} products available`;

        return;

    }


    message.textContent =
        `${resultCount} product(s) found for "${searchText}"`;

}


// ======================================================
// SHOP SEARCH
// ======================================================

function performShopSearch() {

    const searchInput =
        document.getElementById(
            "shop-search"
        );


    if (!searchInput) {

        return;

    }


    searchProducts(
        searchInput.value
    );

}


// ======================================================
// HOME SEARCH
// ======================================================

function performHomeSearch() {

    const searchInput =
        document.getElementById(
            "home-search"
        );


    if (!searchInput) {

        return;

    }


    const searchText =
        searchInput.value.trim();


    if (searchText === "") {

        window.location.href =
            "shop.html";

        return;

    }


    /*
        Store the search term temporarily
        so the Shop page can use it.
    */

    sessionStorage.setItem(
        "qualityAccessorySearch",
        searchText
    );


    window.location.href =
        "shop.html";

}


// ======================================================
// SETUP HOME SEARCH
// ======================================================

function setupHomeSearch() {

    const input =
        document.getElementById(
            "home-search"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                performHomeSearch();

            }

        }
    );

}


// ======================================================
// SETUP SHOP SEARCH
// ======================================================

function setupShopSearch() {

    const input =
        document.getElementById(
            "shop-search"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "input",
        function() {

            searchProducts(
                input.value
            );

        }
    );


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                performShopSearch();

            }

        }
    );


    /*
        If the visitor searched from
        Home, restore that search here.
    */

    const savedSearch =
        sessionStorage.getItem(
            "qualityAccessorySearch"
        );


    if (savedSearch) {

        input.value =
            savedSearch;


        searchProducts(
            savedSearch
        );


        sessionStorage.removeItem(
            "qualityAccessorySearch"
        );

    }

}


// ======================================================
// CATEGORY FILTER
// ======================================================

function filterShopCategory(
    category,
    clickedButton
) {

    let filteredProducts;


    if (category === "all") {

        filteredProducts =
            products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    displayProducts(
        filteredProducts,
        "shop-products"
    );


    /*
        Update active filter button.
    */

    const buttons =
        document.querySelectorAll(
            ".category-filter"
        );


    buttons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    if (clickedButton) {

        clickedButton.classList.add(
            "active"
        );

    }


    updateSearchResultMessage(
        filteredProducts.length,
        category === "all"
            ? ""
            : category
    );

}


// ======================================================
// WISHLIST / HEART
// ======================================================

function toggleWishlist(button) {

    const isSelected =
        button.classList.contains(
            "liked"
        );


    if (isSelected) {

        button.classList.remove(
            "liked"
        );

        button.textContent = "♡";

    } else {

        button.classList.add(
            "liked"
        );

        button.textContent = "♥";

    }

}


// ======================================================
// CATEGORY COUNT
// ======================================================

function getCategoryCount(category) {

    return products.filter(
        product =>
            product.category === category
    ).length;

}


// ======================================================
// PAGE INITIALIZATION
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        // HOME FEATURED PRODUCTS

        loadFeaturedProducts();


        // OPTIONAL HOME PRODUCTS

        loadHomeProducts();


        // SHOP

        loadShopProducts();


        // JEWELRY

        loadJewelryProducts();


        // CLOTHES

        loadClothesProducts();


        // CART

        displayCart();


        // CART BADGE

        updateCartCount();


        // HOME SEARCH

        setupHomeSearch();


        // SHOP SEARCH

        setupShopSearch();


    }
);


// ======================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ======================================================

window.addToCart =
    addToCart;

window.increaseQuantity =
    increaseQuantity;

window.decreaseQuantity =
    decreaseQuantity;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.searchProducts =
    searchProducts;

window.performShopSearch =
    performShopSearch;

window.performHomeSearch =
    performHomeSearch;

window.filterShopCategory =
    filterShopCategory;

window.toggleWishlist =
    toggleWishlist;
// ===============================
// EVENTS
// ===============================

const events = [
    {
        id: 1,
        name: "Birthday Events",
        image: "images/birthday-event.jpg",
        description: "Beautiful birthday event planning and decoration for memorable celebrations.",
        price: 50000,
        keywords: ["birthday", "party", "celebration", "event"]
    },

    {
        id: 2,
        name: "Wedding Events",
        image: "images/wedding-event.jpg",
        description: "Elegant wedding planning and decoration designed to make your special day memorable.",
        price: 150000,
        keywords: ["wedding", "marriage", "ceremony", "event"]
    },

    {
        id: 3,
        name: "Naming Ceremony",
        image: "images/naming-ceremony.jpg",
        description: "Beautiful setup and coordination for naming ceremonies and family celebrations.",
        price: 70000,
        keywords: ["naming ceremony", "baby", "celebration", "event"]
    },

    {
        id: 4,
        name: "Graduation Events",
        image: "images/graduation-event.jpg",
        description: "Celebrate your graduation with professional event planning and decoration.",
        price: 60000,
        keywords: ["graduation", "school", "celebration", "event"]
    },

    {
        id: 5,
        name: "Anniversary Events",
        image: "images/anniversary-event.jpg",
        description: "Create a beautiful anniversary celebration with stylish planning and decoration.",
        price: 80000,
        keywords: ["anniversary", "couple", "celebration", "event"]
    }
];


// ===============================
// DISPLAY EVENTS
// ===============================

function displayEvents() {
    const container = document.getElementById("events-products");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.className = "product-card event-card";

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img 
                    src="${event.image}" 
                    alt="${event.name}"
                    class="product-image"
                >
            </div>

            <div class="product-info">
                <h3>${event.name}</h3>

                <p class="product-description">
                    ${event.description}
                </p>

                <div class="product-price">
                    ₦${event.price.toLocaleString()}
                </div>

                <button 
                    class="add-cart-btn"
                    onclick="contactForEvent('${event.name}')"
                >
                    <i class="fas fa-calendar-check"></i>
                    Book Event
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}


// ===============================
// EVENT BOOKING
// ===============================

function contactForEvent(eventName) {
    const message = `Hello, I am interested in booking your ${eventName} service. Please give me more information.`;

    const whatsappNumber = "2348033331100";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


// ===============================
// LOAD EVENTS WHEN PAGE OPENS
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    displayEvents();
});