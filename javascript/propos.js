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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // Créer le bouton burger si non présent
    if (!menuToggle) {
        const burger = document.createElement('div');
        burger.className = 'menu-toggle';
        burger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
        burger.id = 'mobile-menu';
        header.querySelector('nav').appendChild(burger);
    }

    // Gestion du clic sur le burger
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Empêche le défilement lorsque le menu est ouvert
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            document.querySelector('.menu-toggle').classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
