
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

// Auto scroll every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour gérer les données du footer
app.use(express.json());

// Exemple de données pour le footer
const footerData = {
  about: [
    { text: "Notre équipe", link: "#" },
    { text: "Nos services", link: "#" },
    { text: "Contact", link: "#" }
  ],
  services: [
    { text: "Consultation juridique", link: "#" },
    { text: "Rédaction de contrats", link: "#" },
    { text: "Litiges", link: "#" }
  ],
  socialMedia: [
    { platform: "Facebook", link: "#", icon: "facebook-icon.png" },
    { platform: "Twitter", link: "#", icon: "twitter-icon.png" },
    { platform: "LinkedIn", link: "#", icon: "linkedin-icon.png" }
  ]
};

// Route pour obtenir les données du footer
app.get('/api/footer', (req, res) => {
  res.json(footerData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

  const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'flex'; // Montre le bouton quand on défile
    } else {
      scrollToTopButton.style.display = 'none'; // Cache le bouton en haut de la page
    }
  });

  scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement en douceur
    });
  });
// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// Fonction pour afficher l'image suivante
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Fonction pour afficher l'image précédente
function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

// Écouteurs d'événements pour les boutons
document.querySelector('.carousel-button.next').addEventListener('click', showNextImage);
document.querySelector('.carousel-button.prev').addEventListener('click', showPrevImage);

// Changement automatique d'image toutes les 10 secondes
setInterval(showNextImage, 10000);