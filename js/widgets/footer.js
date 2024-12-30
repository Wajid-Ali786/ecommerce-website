document.getElementById("footer").innerHTML = `
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
                <p>Address:  Panjab, Wazirabad</p>
            </div>

            <!-- Quick Links -->
            <div>
                <h3>Quick Links</h3>
                <a href="../../index.html">Home</a><br>
                <a href="products.html">Products</a><br>
                <a href="about.html">About Us</a><br>
                <a href="contact.html">Contact</a>
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
