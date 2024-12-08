document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form submission
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Köszönjük az üzenetet, hamarosan jelentkezünk!");
        form.reset();
    });
});
