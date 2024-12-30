document.getElementById("navbar").innerHTML = `
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
        <!-- Adjusted the path for local testing -->
        <a href="../index.html" class="logo"><img src="./../../assets/icons/header_logo.png" alt="Cutlery Cove" style="margin-bottom:-28px;"></a>
        <div class="search-bar">
            <input type="text" id="search" placeholder="Search products...">
            <button onclick="searchProducts()">Search</button>
        </div>
        <ul id="nav-menu">
            <!-- Adjusted the paths for local navigation -->
            <li><a href="./../../index.html">Home</a></li>
            <li><a href="./products.html">Products</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
        <div class="nav-icons">
            <a href="./cart.html" class="cart">🛒 <span class="cart-count" id="cart-count">0</span></a>
        </div>
        <div class="hamburger" id="hamburger-menu">
            <div></div><div></div><div></div>
        </div>
    </nav>
`;

// Function to update the cart counter
function updateCartCounter() {
    const cartCountDisplay = document.getElementById("cart-count");
    if (cartCountDisplay) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountDisplay.textContent = totalItems;
    }
}

// Update cart counter when the navbar is loaded
document.addEventListener("DOMContentLoaded", updateCartCounter);
