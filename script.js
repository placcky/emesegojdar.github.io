document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling csak belső linkekre
    document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
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
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    
    // Galéria képek kattintási eseménye
    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", () => {
            lightboxImg.src = image.src; // A lightbox kép forrását beállítjuk
            lightbox.classList.add("visible"); // Lightbox megjelenítése
        });
    });

    // Bezáró gomb esemény
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("visible"); // Lightbox elrejtése
    });

    // Lightbox bezárása, ha a háttérre kattintunk
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});

//Mobile nézet
//const hamburger = document.querySelector('.hamburger');
//const navMenu = document.querySelector('.nav-menu');

//hamburger.addEventListener('click', () => {
//    navMenu.classList.toggle('active');
//});

// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML structure
    const modalHTML = `
        <div id="certificateModal" class="certificate-modal">
            <div class="certificate-modal-content">
                <span class="certificate-modal-close">&times;</span>
                <img id="modalImage" src="" alt="Certificate">
            </div>
        </div>
    `;
    
    // Add modal to the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.certificate-modal-close');
    
    // Get all certificate images
    const certificateImages = document.querySelectorAll('.cert-img');
    
    // Add click event to each certificate image
    certificateImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
