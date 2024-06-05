const products = [
    { id: 1, name: 'GTA 5 Premium Online Edition PC', price: 17, image: 'Image/IMG_20240406_213602_273.jpg' },
    { id: 2, name: 'Hitman 2 PC', price: 17, image: 'Image/IMG_20240406_213855_842.jpg' },
    { id: 3, name: 'Forza Horizon 4 PC', price: 27.20, image: 'Image/IMG_20240406_214409_220.jpg' },
    { id: 4, name: 'Forza Horizon 5 PC', price: 33.58, image: 'Image/IMG_20240406_215544_476.jpg' },
    { id: 5, name: 'American Truck Simulator PC', price: 10.20, image: 'Image/IMG_20240406_215804_880.jpg' },
    { id: 6, name: 'Call of Duty Black Ops 4 PC', price: 63.75, image: 'Image/IMG_20240406_220246_074.jpg' },
    { id: 7, name: 'Cyberpunk 2077 PC', price: 35.70, image: 'Image/IMG_20240406_221025_135.jpg' },
    { id: 8, name: 'Dead by Daylight PC', price: 12.75, image: 'Image/IMG_20240406_221329_871.jpg' },
    { id: 9, name: 'Euro Truck Simulator 2 PC', price: 22.10, image: 'Image/IMG_20240406_221729_047.jpg' },
    { id: 10, name: 'Far Cry 4 PC', price: 11.90, image: 'Image/IMG_20240406_220544_184.jpg' },
    { id: 11, name: 'Far Cry 5 PC', price: 15.30, image: 'Image/IMG_20240406_220714_103.jpg' },
    { id: 12, name: 'Far Cry 6 PC', price: 17, image: 'Image/IMG_20240406_220842_394.jpg' }
];

function renderProducts() {
    const productsElement = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} EUR</p>
            <button onclick="addToCart(${product.id})">Dodaj u korpu</button>
        `;
        productsElement.appendChild(productElement);
    });
}




const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const orderButton = document.getElementById('order-button');

function renderProducts() {
    const productsElement = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} EUR</p>
            <button onclick="addToCart(${product.id})">Dodaj u korpu</button>
        `;
        productsElement.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.price} EUR`;
        cartItemsElement.appendChild(itemElement);
        totalPrice += item.price;
    });
    totalPriceElement.textContent = totalPrice;
}

function orderProducts() {
    if (cart.length === 0) {
        alert('Korpa je prazna!');
        return;
    }

    const orderDetails = cart.map(item => `${item.name} - ${item.price} EUR`).join(', ');
    const total = totalPriceElement.textContent;
    const mailtoLink = `mailto:tvoj.email@gmail.com?subject=Nova Porudžbina&body=Detalji porudžbine:%0D%0A${orderDetails}%0D%0A%0D%0AUkupno: ${total} EUR`;

    window.location.href = mailtoLink;
}

orderButton.addEventListener('click', orderProducts);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});




