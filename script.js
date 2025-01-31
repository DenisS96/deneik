document.addEventListener("DOMContentLoaded", function () {
    // --- Carousel Functionaliteit ---
    let index = 0;
    const slides = document.querySelectorAll(".carousel_slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;

    // Functie om de actieve slide te tonen
    function showSlide(i) {
        // Verberg alle slides
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        // Toon de huidige slide
        slides[i].classList.add("active");
        dots[i].classList.add("active");
    }

    // Volgende slide
    document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        showSlide(index);
    });

    // Vorige slide
    document.querySelector(".prev").addEventListener("click", () => {
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

    // --- Mobiele Navigatie Functionaliteit ---
    const menuIcon = document.getElementById("menu_icon");
    const menu = document.getElementById("menu");

    // Open/sluit het menu bij klik op de hamburgerknop
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuIcon.classList.toggle("active");
    });

    // Sluit het menu als er buiten wordt geklikt
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("open");
            menuIcon.classList.remove("active");
        }
    });
});