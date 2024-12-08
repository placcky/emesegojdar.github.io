document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Expand project details
    document.querySelectorAll(".project a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const project = e.target.closest(".project");
            const description = project.querySelector("p");
            if (description.style.display === "none") {
                description.style.display = "block";
                e.target.textContent = "Részletek elrejtése";
            } else {
                description.style.display = "none";
                e.target.textContent = "Részletek";
            }
        });
    });

    // Simple contact form validation
    const contactForm = document.createElement("form");
    contactForm.innerHTML = `
        <label for="name">Név:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="message">Üzenet:</label>
        <textarea id="message" name="message" required></textarea><br>
        <button type="submit">Küldés</button>
    `;
    const contactSection = document.querySelector("#contact");
    contactSection.appendChild(contactForm);

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Köszönjük az üzenetet, hamarosan válaszolunk!");
        contactForm.reset();
    });
});
