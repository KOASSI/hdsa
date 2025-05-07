document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('click', function() {
      const label = this.previousElementSibling;
      if (this.value === '') {
        label.style.top = '10px';
        label.style.left = '10px';
        label.style.fontSize = '16px';
        label.style.color = '#999';
      }
    });
  });