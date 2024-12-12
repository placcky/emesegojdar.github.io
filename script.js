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
});


// GAléria betöltése elvileg
document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const galleryTitle = document.getElementById("gallery-title");

    // Lekérjük az URL paramétert a galéria kiválasztásához
    const urlParams = new URLSearchParams(window.location.search);
    const galleryIndex = urlParams.get("gallery") || 0; // Alapértelmezett az első galéria

    // JSON betöltése
    fetch("gallery-data.json")
        .then(response => response.json())
        .then(data => {
            const gallery = data.galleries[galleryIndex];
            galleryTitle.textContent = gallery.title;

            // Képek betöltése
            gallery.images.forEach(image => {
                const projectDiv = document.createElement("div");
                projectDiv.className = "project";

                const img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;

                const desc = document.createElement("p");
                desc.textContent = image.description;

                projectDiv.appendChild(img);
                projectDiv.appendChild(desc);
                imageContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error loading gallery data:", error));
});
