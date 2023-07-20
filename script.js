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

function submitForm(event) {
  event.preventDefault();

  document.getElementById("contact-form").style.display = "none";

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

//lenis

var body = document.body;

function disableScroll() {
  body.style.overflow = 'hidden';
}

function enableScroll() {
  body.style.overflow = '';
}

body.classList.add('loading-active');

disableScroll();

//header
const header = document.querySelector('header');
const aboutLink = document.querySelector('a[href="#about"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLink = document.querySelector('a[href="#contact"]');
const logo = document.querySelector('.logo');
const icon = document.querySelector('.icon');
const icon1 = document.querySelector('.icon-1');

const transitionDuration = '1.4s';

function setBorderColor(element, color) {
  element.style.borderBottomColor = color;
  element.style.transitionDuration = transitionDuration;
}

aboutLink.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

aboutLink.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

projectsLink.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

projectsLink.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

contactLink.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

contactLink.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

logo.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

logo.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

icon.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

icon.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

icon1.addEventListener('mouseover', function() {
  setBorderColor(header, '#080173cc');
});

icon1.addEventListener('mouseout', function() {
  setBorderColor(header, '#cfcfcf');
});

//photos section
$(document).ready(function() {
  $('.image, .image-1, .image-2').hover(
    function() {
      $('.image, .image-1, .image-2').not(this).addClass('blur');
    },
    function() {
      $('.image, .image-1, .image-2').removeClass('blur');
    }
  );
});


//projects section
$(document).ready(function() {
  $('.preview').hover(
    function() {
      $('.preview').not(this).addClass('blur');
    },
    function() {
      $('.preview').removeClass('blur');
    }
  );
});


//contact section
window.addEventListener('scroll', function() {
  var arrow = document.querySelector('.arrow');
  var contactSection = document.querySelector('.contact-section');
  
  // Get the position of the contact section
  var contactSectionPosition = contactSection.getBoundingClientRect().top;

  // Check if the contact section is in the viewport
  if (contactSectionPosition < window.innerHeight) {
    arrow.classList.add('no-filter');
  } else {
    arrow.classList.remove('no-filter');
  }
});











