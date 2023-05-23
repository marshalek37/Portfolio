// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

// Form submission
const form = document.querySelector('#contact-form');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate form submission success by showing the success message
  successMessage.style.display = 'block';

  // Optional: Reset the form fields
  form.reset();
});

window.addEventListener('load', function() {
  var loadingElement = document.querySelector('.loading');
  loadingElement.style.display = 'none';
});
