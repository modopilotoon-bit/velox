const WHATSAPP_URL = 'https://wa.me/529832135455?text=Hola%2C%20me%20gustar%C3%ADa%20crear%20un%20sitio%20web%20con%20Velox%20Web';

const navbar = document.getElementById('navbar');
const revealElements = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const waLinks = document.querySelectorAll('.wa-link');

waLinks.forEach((link) => {
  link.href = WHATSAPP_URL;
});

const handleNavbar = () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};

window.addEventListener('scroll', handleNavbar, { passive: true });
handleNavbar();

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.45 });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
  revealObserver.observe(el);
});
