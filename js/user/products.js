// Static product data (replace with API data later if needed)

 const products = [
    { id: 1, name: 'Chef Knife', category: 'kitchen-knives', price: 29.99, image: '../../assets/images/knife.jpg' },
    { id: 2, name: 'Silver Fork', category: 'tableware', price: 19.99, image: '../../assets/images/fork.jpg' },
    { id: 3, name: 'Designer Spoon', category: 'tableware', price: 24.99, image: '../../assets/images/spoon.jpg' },
    { id: 4, name: 'Cutlery Set', category: 'cutlery-sets', price: 49.99, image: '../../assets/images/cutlery-set.jpg' },
   


    // addition products 

    // 01--Axess
    { id: 5, name: 'Axe-1.jpg', category: 'Axes', price: 15.99, image: '../../assets/images/axes/axe1.jpg' },

    { id: 6, name: 'Axe-2.jpg', category: 'Axes', price: 15.99, image: '../../assets/images/axes/axe2.jpg' },

    { id: 7, name: 'Axe-3.jpg', category: 'Axes', price: 15.99, image: '../../assets/images/axes/axe3.jpg' },

    { id: 8, name: 'Axe-4.jpg', category: 'Axes', price: 15.99, image: '../../assets/images/axes/axe4.jpg' },

 // 02--Boads
 { id: 9, name: 'Cuting Board-1', category: 'Cuting Boards', price: 15.99, image: '../../assets/images/boards/boards1.jpg' },
 { id: 10, name: 'Cuting Board-2', category: 'Cuting Boards', price: 15.99, image: '../../assets/images/boards/boards2.jpg' },
 { id: 11, name: 'Cuting Board-3', category: 'Cuting Boards', price: 15.99, image: '../../assets/images/boards/boards3.jpg' },
 { id: 12, name: 'Cuting Board-4', category: 'Cuting Boards', price: 15.99, image: '../../assets/images/boards/boards4.jpg' },

 // 03--Cheese and Meat Knives
 { id: 13, name: 'Cheese and Meat Knives-1', category: 'Cheese and Meat Knives', price: 15.99, image: '../../assets/images/meat_knives/meat_knives1.jpg' },
 { id: 14, name: 'Cheese and Meat Knives-2', category: 'Cheese and Meat Knives', price: 15.99, image: '../../assets/images/meat_knives/meat_knives2.jpg' },
 { id: 15, name: 'Cheese and Meat Knives-3', category: 'Cheese and Meat Knives', price: 15.99, image: '../../assets/images/meat_knives/meat_knives3.jpg' },
 { id: 16, name: 'Cheese and Meat Knives-4', category: 'Cheese and Meat Knives', price: 15.99, image: '../../assets/images/meat_knives/meat_knives4.jpg' },

 // 04--Copper or Silver-plated Cutlery
 { id: 17, name: 'Copper or Silver-plated Cutlery-1', category: 'Copper or Silver-plated Cutlery', price: 15.99, image: '../../assets/images/silver/silver1.jpg' },
 { id: 18, name: 'Copper or Silver-plated Cutlery-2', category: 'Copper or Silver-plated Cutlery', price: 15.99, image: '../../assets/images/silver/silver2.jpg' },
 { id: 19, name: 'Copper or Silver-plated Cutlery-3', category: 'Copper or Silver-plated Cutlery', price: 15.99, image: '../../assets/images/silver/silver3.jpg' },
 { id: 20, name: 'Copper or Silver-plated Cutlery-4', category: 'Copper or Silver-plated Cutlery', price: 15.99, image: '../../assets/images/silver/silver4.jpg' },

  // 05--Skewers and BBQ Tools
  { id: 21, name: 'Skewers and BBQ Tool-1', category: 'Skewers and BBQ Tools', price: 15.99, image: '../../assets/images/skewers/skewers1.jpg' },
  { id: 22, name: 'Skewers and BBQ Tool-2', category: 'Skewers and BBQ Tools', price: 15.99, image: '../../assets/images/skewers/skewers2.jpg' },
  { id: 23, name: 'Skewers and BBQ Tool-3', category: 'Skewers and BBQ Tools', price: 15.99, image: '../../assets/images/skewers/skewers3.jpg' },
  { id: 24, name: 'Skewers and BBQ Tool-4', category: 'Skewers and BBQ Tools', price: 15.99, image: '../../assets/images/skewers/skewers4.jpg' },

  // 06--Leather Shealths and Holsters
  { id: 25, name: 'Leather Shealth and Holster-1', category: 'Leather Shealths and Holsters', price: 15.99, image: '../../assets/images/sheaths/sheaths1.jpg' },
  { id: 26, name: 'Leather Shealth and Holster-2', category: 'Leather Shealths and Holsters', price: 15.99, image: '../../assets/images/sheaths/sheaths2.jpg' },
  { id: 27, name: 'Leather Shealth and Holster-3', category: 'Leather Shealths and Holsters', price: 15.99, image: '../../assets/images/sheaths/sheaths3.jpg' },
  { id: 28, name: 'Leather Shealth and Holster-4', category: 'Leather Shealths and Holsters', price: 15.99, image: '../../assets/images/sheaths/sheaths4.jpg' },

  // 07--Sharping Stons and Tools
  { id: 29, name: 'Sharping Stons and Tools-1', category: 'Sharping Stons and Tools', price: 15.99, image: '../../assets/images/stones/stones1.jpg' },
  { id: 30, name: 'Sharping Stons and Tools-2', category: 'Sharping Stons and Tools', price: 15.99, image: '../../assets/images/stones/stones2.jpg' },
  { id: 31, name: 'Sharping Stons and Tools-3', category: 'Sharping Stons and Tools', price: 15.99, image: '../../assets/images/stones/stones3.jpg' },
  { id: 32, name: 'Sharping Stons and Tools-4', category: 'Sharping Stons and Tools', price: 15.99, image: '../../assets/images/stones/stones4.jpg' },

 // 08--Customizable Cutlery
 { id: 33, name: 'Customizable Cutlery', category: 'Customizable Cutlery', price: 15.99, image: '../../assets/images/customizable/customizable1.jpg' },
 { id: 34, name: 'Customizable Cutlery', category: 'Customizable Cutlery', price: 15.99, image: '../../assets/images/customizable/customizable2.jpg' },
 { id: 35, name: 'Customizable Cutlery', category: 'Customizable Cutlery', price: 15.99, image: '../../assets/images/customizable/customizable3.jpg' },
 { id: 36, name: 'Customizable Cutlery', category: 'Customizable Cutlery', price: 15.99, image: '../../assets/images/customizable/customizable4.jpg' },

 // 09-- Decorative Viking-themed Items
 { id: 37, name: 'Decorative Viking-themed Items - 1', category: 'Customizable Decorative Viking-themed Items', price: 15.99, image: '../../assets/images/decore/decore1.jpg' },
 { id: 38, name: 'Decorative Viking-themed Items - 2', category: 'Customizable Decorative Viking-themed Items', price: 15.99, image: '../../assets/images/decore/decore2.jpg' },
 { id: 39, name: 'Decorative Viking-themed Items - 3', category: 'Customizable Decorative Viking-themed Items', price: 15.99, image: '../../assets/images/decore/decore3.jpg' },
 { id: 40, name: 'Decorative Viking-themed Items - 4', category: 'Customizable Decorative Viking-themed Items', price: 15.99, image: '../../assets/images/decore/decore4.jpg' },

 // 09-- Viking-themed Tableware
 { id: 41, name: 'Viking-themed . .  Tableware - 1', category: 'Customizable Viking-themed Tableware', price: 15.99, image: '../../assets/images/viking/viking1.jpg' },
 { id: 42, name: 'Viking-themed . .  Tableware - 2', category: 'Customizable Viking-themed Tableware', price: 15.99, image: '../../assets/images/viking/viking2.jpg' },
 { id: 43, name: 'Viking-themed . .  Tableware - 3', category: 'Customizable Viking-themed Tableware', price: 15.99, image: '../../assets/images/viking/viking3.jpg' },
 { id: 44, name: 'Viking-themed . .  Tableware - 4', category: 'Customizable Viking-themed Tableware', price: 15.99, image: '../../assets/images/viking/viking4.jpg' },

];

// DOM elements
const productGrid = document.querySelector('.product-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');

// Function to render products
function renderProducts(productsToRender) {
    productGrid.innerHTML = ''; // Clear existing products
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p>No products found.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.dataset.productId = product.id; // Set the product ID
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn btn-primary">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);
    });
}

// Function to filter products
function filterProducts() {
    const searchQuery = searchBar.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

    let filteredProducts = products;

    // Search by name
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (selectedPriceRange === 'under-25') return product.price < 25;
            if (selectedPriceRange === '25-50') return product.price >= 25 && product.price <= 50;
            if (selectedPriceRange === '50-100') return product.price > 50 && product.price <= 100;
            if (selectedPriceRange === '100-plus') return product.price > 100;
        });
    }

    renderProducts(filteredProducts);
}

// Event listeners for filters
searchBar.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);

// Cart data
let cart = [];

// DOM elements for the cart
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalDisplay = document.getElementById('cart-total');

// Function to add an item to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Product not found for ID:", productId);
    
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        console.log(`product already added:`, );
      alert(`product already added`)

      return;
    } else {
        cart.push({ ...product, quantity: 1 })
        console.log(`Product added to cart:`, product);
    alert(`Product added to cart:`);
    } 
    updateCart(); // Update cart display
   updateCartCounter(); // Update the counter on page load
    saveCartToLocalStorage(); // Save cart to localStorage
  
    
}





// DOM element for the cart counter
// Function to update the cart counter
function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalItems; // Update the DOM
} 
//  Synchronize the Cart Counter on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
    updateCartCounter(); // Update the counter on page load
});


// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCounter(); // Update the counter on page load
    saveCartToLocalStorage();
}

// Function to update the cart display
function updateCart() {
   
  
}

// Function to save the cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load the cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
        cart = savedCart;
        updateCart();
        
    }
}

// Attach event listeners to product buttons
productGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
        const productElement = event.target.closest('.product-item');
        const productId = parseInt(productElement.dataset.productId, 10);

        if (isNaN(productId)) {
            console.error("Invalid product ID:", productElement.dataset.productId);
            return;
        }

        addToCart(productId);
    }
});

// Initial setup
loadCartFromLocalStorage();
renderProducts(products);
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('product-list');
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('products')) || [];

    if (!productContainer) {
        console.error("Product container not found!");
        return;
    }

    if (productsFromLocalStorage.length === 0) {
        productContainer.innerHTML = "<p>No more products available yet!</p>";
        console.log("No products available in localStorage.");
    } else {
        productContainer.innerHTML = productsFromLocalStorage.map(product => 
	
     `
            <div class="product-item" data-product-id="${product.id}"> 
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        `).join('');

        console.log("Products loaded:", productsFromLocalStorage);

        productContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('btn-primary')) {
                const productElement = event.target.closest('.product-item');
                const productId = parseInt(productElement.dataset.productId, 10);

                console.log("Clicked Product ID:", productId);

                if (isNaN(productId)) {
                    console.error("Invalid product ID:", productElement.dataset.productId);
                    return;
                }

                const matchingProduct = productsFromLocalStorage.find(product => product.id === productId);

                if (!matchingProduct) {
                    console.error("Product not found for ID:", productId);
                    return;
                }

                addToCart(productId);
            }
        });
    }
});
