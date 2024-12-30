
  

document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCountDisplay = document.getElementById("cart-count");
    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to proceed to checkout.");
        } else {
            // Save the cart in localStorage and redirect to the checkout page
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.href = "../../screens/user/checkout.html"; // Adjust path as needed
        }
    });
    

    // Load the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

     // Function to update the cart counter
     function updateCartCounter() {
        if (cartCountDisplay) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountDisplay.textContent = totalItems;
        }
    }

    // Function to update cart display
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center;">Your cart is empty.</td>
                  </tr>
               <tr >
        <td colspan="5" style="text-align: center;">
        <a href="./../../screens/user/products.html" style="text-decoration:none;background:green;color:white;padding:10px; border-radius:20%;">Continue Shoping</a>
        </td>
        </tr>

            `;
            cartTotal.innerText = "0.00";
            return;
        }

        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        cartTotal.innerText = total.toFixed(2);
    }

    // Function to update item quantity
    window.updateQuantity = function (index, newQuantity) {
        cart[index].quantity = parseInt(newQuantity, 10) || 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartCounter(); // Update the counter
    };

    // Function to remove an item from the cart
    window.removeItem = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartCounter(); // Update the counter
    };

    // Function to clear the cart
    document.getElementById("clear-cart").addEventListener("click", function () {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartCounter(); // Update the counter
    });

    // Function to add a product to the cart
    window.addToCart = function (product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartCounter(); // Update the counter
    };

    // Initialize cart display
    updateCart();
    updateCartCounter(); // Update the counter
});


