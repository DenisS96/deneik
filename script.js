document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is geladen!");

    // --- Carousel Functionaliteit ---
    const slides = document.querySelectorAll(".carousel_slide");
    const dots = document.querySelectorAll(".dot");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (slides.length > 0 && dots.length > 0 && nextButton && prevButton) {
        let index = 0;
        const totalSlides = slides.length;

        // Functie om de actieve slide te tonen
        function showSlide(i) {
            slides.forEach((slide) => slide.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));
            slides[i].classList.add("active");
            dots[i].classList.add("active");
        }

        // Volgende slide
        nextButton.addEventListener("click", () => {
            index = (index + 1) % totalSlides;
            showSlide(index);
        });

        // Vorige slide
        prevButton.addEventListener("click", () => {
            index = (index - 1 + totalSlides) % totalSlides;
            showSlide(index);
        });

        // Dots voor navigatie
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                index = i;
                showSlide(index);
            });
        });

        // Automatisch doorlopen van de carousel
        setInterval(() => {
            index = (index + 1) % totalSlides;
            showSlide(index);
        }, 5000);

        // Toon de eerste slide bij het laden
        showSlide(index);
    }

    // --- Mobiele Navigatie Functionaliteit ---
    const menuIcon = document.getElementById("menu_icon");
    const menu = document.getElementById("menu");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("open");
            menuIcon.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                menu.classList.remove("open");
                menuIcon.classList.remove("active");
            }
        });
    }

    // --- Lightbox Functionaliteit ---
    const galleryItems = document.querySelectorAll(".gallery_item");

    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                const imgSrc = item.querySelector("img").src;
                const lightbox = document.createElement("div");
                lightbox.classList.add("lightbox");
                lightbox.innerHTML = `
                    <div class="lightbox_content">
                        <img src="${imgSrc}" alt="Lightbox Image">
                        <span class="close">&times;</span>
                    </div>
                `;
                document.body.appendChild(lightbox);

                // Sluit de lightbox bij klik op de sluitknop
                lightbox.querySelector(".close").addEventListener("click", () => {
                    lightbox.remove();
                });

                // Sluit de lightbox bij klik buiten de afbeelding
                lightbox.addEventListener("click", (e) => {
                    if (e.target === lightbox) {
                        lightbox.remove();
                    }
                });
            });
        });
    }
});