const navbar = document.querySelector(".navbar");
const hero = document.getElementById("hero");
const navbarCollapse = document.querySelector('.navbar-collapse');

function cacherNavbarSousHero() {
  const heroBottom = hero.getBoundingClientRect().bottom;
  navbar.classList.toggle("hidden", heroBottom <= 0);
}
window.addEventListener("scroll", cacherNavbarSousHero);
window.addEventListener("resize", cacherNavbarSousHero);

function revelerElements() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 60) setTimeout(() => el.classList.add('active'), index * 100);
  });
}
window.addEventListener('scroll', revelerElements);
window.addEventListener('load', revelerElements);

function activerEffetSurvol(selector, className = 'hovered') {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => el.classList.add(className));
    el.addEventListener('mouseleave', () => el.classList.remove(className));
  });
}
window.addEventListener('load', () => {
  activerEffetSurvol('.btn');
  activerEffetSurvol('.team img', 'survole');
  activerEffetSurvol('.cta__btn');
  activerEffetSurvol('.footer__social-link');
});

const formInfolettre = document.querySelector('#formInfolettre');
const messageInfolettre = document.querySelector('#messageInfolettre');
if (formInfolettre) {
  formInfolettre.addEventListener('submit', e => {
    e.preventDefault();
    messageInfolettre.textContent = "Merci! Vous êtes maintenant inscrit(e) à notre infolettre!";
    messageInfolettre.classList.add('visible');
    formInfolettre.reset();
  });
}

const rdvForm = document.querySelector('.rdv__form');
if (rdvForm) {
  rdvForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Merci! Votre demande de rendez-vous a bien été envoyée.");
    rdvForm.reset();
  });
}

document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => new bootstrap.Collapse(navbarCollapse).hide());
});

document.querySelectorAll('.about__title, .mission__title').forEach(titre => {
  titre.addEventListener('click', () => titre.classList.toggle('ouvert'));
});

const logoFooter = document.querySelector('.footer__brand');
if (logoFooter) {
  logoFooter.addEventListener('click', e => {
    e.preventDefault();
    alert('Retour à la page d’accueil');
    window.location.href = 'index.html';
  });
}

function revelerFooter() {
  const footerEl = document.querySelector('.footer__bottom .reveal');
  if (!footerEl || footerEl.classList.contains('active')) return;
  const top = footerEl.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (top < windowHeight - 0) footerEl.classList.add('active');
}
window.addEventListener('scroll', revelerFooter);
window.addEventListener('load', revelerFooter);