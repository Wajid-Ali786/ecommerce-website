document.addEventListener("DOMContentLoaded", function () {
    const checkoutItemsContainer = document.getElementById("checkout-items");
    const checkoutTotal = document.getElementById("checkout-total");

    // Load the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        checkoutTotal.innerText = "0.00";
        return;
    }

    let total = 0;
    cart.forEach((item) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("checkout-item");
        itemDiv.innerHTML = `
            <div class="item-details">
                <p><strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}</p>
                <p class="subtotal">Subtotal: $${subtotal.toFixed(2)}</p>
            </div>
        `;
        checkoutItemsContainer.appendChild(itemDiv);
    });

    checkoutTotal.innerText = total.toFixed(2);

    // Place order button functionality
    document.getElementById("place-order").addEventListener("click", function () {
        // Disable the button and change text to "Processing..."
        const button = this;
        button.disabled = true;
        button.innerText = "Processing...";

        // Simulate order processing (replace this with actual API call)
        setTimeout(function () {
            // Show the success modal after the processing time
            const modal = document.getElementById("success-modal");
            modal.style.display = "block"; // Display the modal

            // Clear the cart and redirect after showing the modal for a few seconds
            localStorage.removeItem("cart"); // Clear the cart
            setTimeout(function () {
                // Redirect to the products page after a small delay to allow user to read the message
                window.location.href = "../../screens/user/products.html";
            }, 2000); // Delay of 2 seconds before redirecting
        }, 5000); // 5-second delay for "Processing..." text
    });

    // Close the modal when the "OK" button is clicked
    document.getElementById("close-modal").addEventListener("click", function () {
        const modal = document.getElementById("success-modal");
        modal.style.display = "none";
    });

    // Close the modal if clicked outside of the modal content
    window.onclick = function (event) {
        const modal = document.getElementById("success-modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
