document.getElementById("nav-container").innerHTML = `
    <style>
        /* Navigation Bar Styles */
        nav {
            background-color: #ff7f50;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        nav .logo {
            font-size: 1.8rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: white;
            text-decoration: none;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            display: inline;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #333;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger div {
            background-color: white;
            height: 3px;
            width: 25px;
            margin: 3px 0;
        }

        /* Additional Styles */
        .nav-icons {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .nav-icons .cart, .nav-icons .user {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            position: relative;
        }

        .nav-icons .cart-count {
            position: absolute;
            top: -8px;
            right: -10px;
            background-color: red;
            color: white;
            font-size: 0.8rem;
            border-radius: 50%;
            padding: 2px 6px;
        }

        .search-bar input {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            margin-right: 5px;
        }

        .search-bar button {
            background-color: #333;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }

        .search-bar button:hover {
            background-color: #555;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            nav ul {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 60px;
                left: 0;
                background-color: #ff7f50;
                width: 100%;
                text-align: center;
                padding: 10px 0;
            }

            nav ul.active {
                display: flex;
            }

            .hamburger {
                display: flex;
            }
        }
    </style>

    <nav>
        <a href="./../index.html" class="logo"><img src="./assets/icons/header_logo.png" alt="Cutlery Cove" style="margin-bottom:-28px;"></a>
        <div class="search-bar">
            <input type="text" id="search" placeholder="Search products...">
            <button onclick="searchProducts()">Search</button>
        </div>
        <ul id="nav-menu">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./screens/user/products.html">Products</a></li>
            <li><a href="./screens/user/about.html">About</a></li>
            <li><a href="./screens/user/contact.html">Contact</a></li>
        </ul>
        <div class="nav-icons">
            <a href="screens/user/cart.html" class="cart">🛒 <span class="cart-count" id="cart-count">0</span></a>
        </div>
        <div class="hamburger" id="hamburger-menu">
            <div></div><div></div><div></div>
        </div>
    </nav>
`;

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Search Products Function
function searchProducts() {
    const query = document.getElementById("search").value;
    alert("Searching for: " + query); // Replace with actual search logic
}

// Update Cart Count Dynamically
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// Initialize Cart Count on Load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Newsletter Subscription Form Logic
document.getElementById("footer-container").innerHTML = `
    <style>
        /* Footer Styles */
        footer {
            background-color: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            font-size: 1rem;
        }

        .footer-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-container div {
            max-width: 300px;
        }

        .footer-container h3 {
            color: #ff7f50;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 1.2rem;
        }

        .footer-container p, .footer-container a {
            color: #ccc;
            font-size: 0.9rem;
            text-decoration: none;
            line-height: 1.5;
        }

        .footer-container a:hover {
            color: #ff7f50;
        }

        .footer-bottom {
            margin-top: 20px;
            font-size: 0.8rem;
            color: #aaa;
        }
    </style>

    <footer>
        <div class="footer-container">
            <!-- Contact Info -->
            <div>
                <h3>Contact Us</h3>
                <p>Email: aliwaj300@gmail.com</p>
                <p>Phone: +92 (343) 5060-128</p>
                <p>Address: Panjab, Wazirabad</p>
            </div>

            <!-- Quick Links -->
            <div>
                <h3>Quick Links</h3>
                <a href="index.html">Home</a><br>
                <a href="./screens/user/products.html">Products</a><br>
                <a href="screens/user/about.html">About Us</a><br>
                <a href="screens/user/contact.html">Contact</a>
            </div>

            <!-- Newsletter -->
            <div>
                <h3>Subscribe</h3>
                <p>Join our newsletter for the latest updates.</p>
                <form id="newsletter-form">
                    <input type="email" id="newsletter-email" placeholder="Your Email" style="padding: 8px; margin: 10px 0; width: 80%; border-radius: 5px; border: 1px solid #ddd;">
                    <br>
                    <button type="submit" style="background-color: #ff7f50; color: white; border: none; padding: 8px 20px; border-radius: 5px; cursor: pointer;">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Cutlery Cove Market | All Rights Reserved.
        </div>
    </footer>
`;

document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById("newsletter-email").value = ""; // Clear the input field
    } else {
        alert("Please enter a valid email address.");
    }
});
