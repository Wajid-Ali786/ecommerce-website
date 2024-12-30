// Handle Section Switching
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Mock Orders Data
const orders = [
    { id: 1, product: "Chef Knife", customer: "John Doe", status: "Pending" },
    { id: 2, product: "Cutlery Set", customer: "Jane Doe", status: "Shipped" }
];

function loadOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.product}</td>
            <td>${order.customer}</td>
            <td>${order.status}</td>
        </tr>
    `).join('');
}

// Initialize Products
let products = JSON.parse(localStorage.getItem('products')) || [];

// Display Products in Table
function displayProducts() {
    const productTable = document.getElementById('product-list');
    productTable.innerHTML = products.map((product, index) => `
        <tr>
            <td style="text-align:center;">${product.name}</td>
            <td style="text-align:center;">${product.category}</td>
            <td style="text-align:center;">$${product.price}</td>
           <td style="text-align:center;">${product.id}</td>
            <td style="text-align:center;"><img src="${product.image}" alt="${product.name}" width="50"></td>
            <td style="text-align:center;">
                <button onclick="editProduct(${index})" class="btn-edit">Edit</button>
                <button onclick="deleteProduct(${index})" class="btn-delete">Delete</button>
            </td>
        </tr>
    `).join('');
}



// Add Product
document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('product-name').value.trim();
    const category = document.getElementById('product-category').value.trim();
    const priceInput = document.getElementById('product-price').value;
    const imageInput = document.getElementById('product-image');

    if (!name || !category || !priceInput || !imageInput.files[0]) {
        alert("Please fill all fields and upload an image!");
        return;
    }

    const price = parseFloat(priceInput).toFixed(2);
    if (isNaN(price)) {
        alert("Please enter a valid price!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const imageUrl = event.target.result;
        const newProduct = { id: Date.now(), name, category, price, image: imageUrl };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        displayProducts();
        document.getElementById('product-feedback').innerText = "Product added successfully!";
        e.target.reset();
    };
    reader.readAsDataURL(imageInput.files[0]);
});

// Edit Product
function editProduct(index) {
    const product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-price').value = product.price;

// Preserve the product's ID
const updatedProduct = { ...product, name: product.name, category: product.category, price: product.price };


    products.splice(index, 1); // Remove old product for re-submission
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

// Delete Product
function deleteProduct(index) {
    const productId = products[index].id;
    if (confirm(`Are you sure you want to delete the product with ID ${productId}?`)) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    }
}

// Load Existing Products and Orders
document.addEventListener("DOMContentLoaded", () => {
    loadOrders();
    displayProducts();
});



