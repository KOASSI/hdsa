// Menu responsive
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Gestion du formulaire
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message. Nous vous contacterons bientôt.');
    contactForm.reset();
});
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    // Cache toutes les images
    images.forEach(img => img.classList.remove('active'));

    // Affiche l'image suivante
    images[currentIndex].classList.add('active');

    // Passe à l'image suivante
    currentIndex = (currentIndex + 1) % images.length;
}

// Affiche la première image immédiatement
showNextImage();

// Change d'image toutes les 5 secondes
setInterval(showNextImage, 5000);
