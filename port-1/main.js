const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
// Add to your JS
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
ScrollReveal().reveal('.section__container', { 
  distance: '50px',
  duration: 1200,
  easing: 'cubic-bezier(.77,0,.18,1)',
  origin: 'bottom',
  interval: 150
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});
 
// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});function animateSkillBars() {
  document.querySelectorAll('.skill__progress').forEach(function(bar) {
    let perc = bar.getAttribute('data-perc');
    bar.style.width = perc + '%';
  });
}
function animateRadials() {
  document.querySelectorAll('.radial-chart').forEach(function(chart) {
    let perc = chart.getAttribute('data-perc');
    let circle = chart.querySelector('.progress');
    let offset = 282.6 - (282.6 * perc / 100);
    circle.style.strokeDashoffset = offset;
  });
}

 
  // Scroll trigger
  window.addEventListener('scroll', function() {
    var skillsSection = document.getElementById('skills');
    var rect = skillsSection.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom >= 0) {
      animateSkillBars();
      animateRadials();
    }
  });

function sendEmail() {
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var mailtoLink = 'mailto:nyeshwant73@jnn.edu.in?subject=Resume Submission&body=Name: ' + name + '%0AEmail: ' + email + '%0APhone: ' + phone;
window.location.href = mailtoLink;
}

document.querySelectorAll('.radial-chart').forEach(chart => {
  const perc = chart.getAttribute('data-perc');
  const progress = chart.querySelector('.progress');
  setTimeout(() => {
    progress.style.strokeDashoffset = 282.74 * (1 - perc / 100);
  }, 200);
});
