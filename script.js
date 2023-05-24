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
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Make the form disappear
  document.getElementById("contact-form").style.display = "none";
  // Display the success message
  document.getElementById("success-message").style.display = "block";
}

window.addEventListener('load', function() {
  var loadingElement = document.querySelector('.loading');
  loadingElement.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  var arrowLink = document.querySelector('.arrow');

  arrowLink.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));

    // Scroll smoothly to the target element
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

