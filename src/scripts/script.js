const hamburgerToogle = document.querySelector('.hamburger-toggle');
const navbarMenu = document.querySelector('.nav-menu');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

hamburgerToogle.addEventListener('click', () => {
    hamburgerToogle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (
        !hamburgerToogle.contains(e.target) &&
        !navbarMenu.contains(e.target)
    ) {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop    = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
