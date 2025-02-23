const btnScrollTo = document.getElementById('ctm');
const ContactLinks = document.querySelector('.footer');
const homepage = document.getElementById('homepage');
const homepageNav = document.getElementById('homepage-nav');
const themeToggle = document.getElementById('theme-toggle');
const nav = document.getElementById('nav-section');
const body = document.body;
const aboutMe = document.getElementById('about-me-section');
const education = document.getElementById('education-section');
const skills = document.getElementById('skills-section');
const footer = document.getElementById('footer-section');
const cards = document.querySelectorAll('.card');

// ScrollEffect
btnScrollTo.addEventListener('click', function() {
    ContactLinks.scrollIntoView({ behavior: 'smooth' });
});

homepageNav.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    homepage.scrollIntoView({ behavior: 'smooth' });
});


themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        setDarkMode();
        localStorage.setItem('theme', 'dark');
    } else {
        setLightMode();
        localStorage.setItem('theme', 'light');
    }
});

// Theme Functions
function setDarkMode() {
    nav.classList.replace('navbar-light', 'navbar-dark');

    [nav,homepage,aboutMe, education, skills].forEach(section => {
        section.classList.add('bg-dark');
        section.classList.remove('bg-light');
    });
    cards.forEach(card => {
        card.classList.replace('bg-light', 'bg-dark');
        card.classList.replace('text-light', 'text-dark');
    });
    body.classList.add('text-light');
    // body.classList.remove('text-dark');
    footer.style.backgroundColor = '#495057';
    footer.style.color = '#E9ECEF';
}

function setLightMode() {
    nav.classList.replace('navbar-dark', 'navbar-light');

    [nav,homepage,aboutMe, education, skills].forEach(section => {
        section.classList.add('bg-light');
        section.classList.remove('bg-dark');
    });

    cards.forEach(card => {
        card.classList.replace('bg-dark', 'bg-light');
        card.classList.replace('text-dark', 'text-light');
    });

    body.classList.remove('text-dark');
    // body.classList.add('text-light');
    footer.style.backgroundColor = '#e6f2ff';
    footer.style.color = '#212529';   
}
// Appying Theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setDarkMode();
    } else {
        themeToggle.checked = false;
        setLightMode();
    }
});