const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const menuSection = document.querySelector('#menu');
const contactSection = document.querySelector('#contact');

const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const menuLink = document.querySelector('a[href="#menu"]');
const contactLink = document.querySelector('a[href="#contact"]');

homeLink.addEventListener('click', () => {
  homeSection.style.display = 'block';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'none';
});

menuLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'block';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'block';
});
