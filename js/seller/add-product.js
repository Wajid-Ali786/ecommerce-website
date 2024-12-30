// Validation for Add Product Form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".add-product-form");
    const productName = document.getElementById("product-name");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productCategory = document.getElementById("product-category");
    const productImage = document.getElementById("product-image");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Validate Product Name
        if (!productName.value.trim()) {
            showError(productName, "Product name is required.");
            isValid = false;
        }

        // Validate Product Description
        if (!productDescription.value.trim()) {
            showError(productDescription, "Product description is required.");
            isValid = false;
        }

        // Validate Product Price
        if (!productPrice.value.trim() || productPrice.value <= 0) {
            showError(productPrice, "Enter a valid price greater than 0.");
            isValid = false;
        }

        // Validate Product Category
        if (!productCategory.value) {
            showError(productCategory, "Please select a category.");
            isValid = false;
        }

        // Validate Product Image
        if (!productImage.files.length) {
            showError(productImage, "Please upload a product image.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement("p");
        error.className = "error-message";
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add("error");
    }
});
