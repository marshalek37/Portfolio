const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-text');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
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

window.addEventListener('scroll', function() {
  var revertSite = document.querySelector('.revert-site');
  var arrow = document.querySelector('.arrow');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 600) {
    revertSite.classList.add('visible');
  } else {
    revertSite.classList.remove('visible');
  }
});


