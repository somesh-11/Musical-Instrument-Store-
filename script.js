const products = [
    {
        id: 1,
        name: "Acoustic Guitar",
        price: 299.99,
        image: "https://unsplash.com"
    },
    {
        id: 2,
        name: "Electronic Keyboard",
        price: 450.00,
        image: "https://unsplash.com"
    },
    {
        id: 3,
        name: "Professional Drum Kit",
        price: 899.99,
        image: "https://unsplash.com"
    },
    {
        id: 4,
        name: "Classic Violin",
        price: 180.00,
        image: "https://unsplash.com"
    }
];

let cart = [];

// DOM Elements
const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.querySelector('.close-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');

// Render Products dynamically on page load
function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Add Item to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Update Cart Count and Totals
function updateCart() {
    // Update count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Clear previous elements
    cartItemsContainer.innerHTML = '';

    // Calculate total price and add item elements
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>$${item.price.toFixed(2)} x ${item.quantity}</small>
            </div>
            <button class="btn" style="padding: 4px 8px; background:#cc0000;" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = totalPrice.toFixed(2);
}

// Remove Item from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Modal Event Listeners
cartBtn.onclick = () => cartModal.style.display = 'flex';
closeBtn.onclick = () => cartModal.style.display = 'none';
window.onclick = (e) => { if (e.target === cartModal) cartModal.style.display = 'none'; };

// Initialise App
displayProducts();
