// declaring and initializing the sections for each page
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const menuSection = document.querySelector('#menu');
const contactSection = document.querySelector('#contact');

// declaring and initializing the links for each page
const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const menuLink = document.querySelector('a[href="#menu"]');
const contactLink = document.querySelector('a[href="#contact"]');

// if 'home' is clicked on, it will only display the home section and keep everything else hidden.
homeLink.addEventListener('click', () => {
  homeSection.style.display = 'block';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// if 'about' is clicked on, it will only display the home section and keep everything else hidden.
aboutLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'none';
});

// if 'menu'' is clicked on, it will only display the home section and keep everything else hidden.
menuLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'block';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// if 'contact' is clicked on, it will only display the home section and keep everything else hidden.
contactLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'block';
});
