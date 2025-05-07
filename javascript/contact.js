document.addEventListener('DOMContentLoaded', function() {
  // Menu Burger
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Empêche le défilement quand le menu est ouvert
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Animation des labels du formulaire
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
      const label = this.nextElementSibling;
      label.style.top = '-10px';
      label.style.left = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#1a73e8';
    });
    
    input.addEventListener('blur', function() {
      const label = this.nextElementSibling;
      if (this.value === '') {
        label.style.top = '15px';
        label.style.left = '15px';
        label.style.fontSize = '16px';
        label.style.color = '#999';
      }
    });
    
    // Pré-remplissage si valeur existante
    if (input.value !== '') {
      const label = input.nextElementSibling;
      label.style.top = '-10px';
      label.style.left = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#1a73e8';
    }
  });
  
  // Gestion du formulaire
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Ici vous pouvez ajouter la logique d'envoi du formulaire
      // Par exemple avec fetch() pour une soumission AJAX
      
      alert('Formulaire soumis avec succès!');
      this.reset();
      
      // Réinitialiser les labels
      document.querySelectorAll('.form-group label').forEach(label => {
        label.style.top = '15px';
        label.style.left = '15px';
        label.style.fontSize = '16px';
        label.style.color = '#999';
      });
    });
  }
});
