document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
  
    // Afficher ou masquer le bouton en fonction du défilement
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) { // Afficher le bouton après 300px de défilement
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    });
  
    // Faire défiler la page vers le haut lorsque le bouton est cliqué
    scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0, // Défile jusqu'au haut de la page
        behavior: 'smooth' // Défilement fluide
      });
    });
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

