const prev = document.getElementById('prev');
const next = document.getElementById('next');
const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');

menuHamburger.addEventListener("click", () => {
    nav_menu.classList.add("active");
    document.body.style.backgroundColor = "hsl(0, 0%, 63%)";
});

closeMenu.addEventListener("click", () => {
    nav_menu.classList.remove("active");
    document.body.style.backgroundColor = "white";
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('hero__slide');
    const totalSlides = slides.length;

    // Handle wrap-around for slide index
    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    // Remove all active, next, and prev classes
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active', 'next', 'prev');
    }

    // Add appropriate classes for the current slide
    slides[slideIndex - 1].classList.add('active');
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});