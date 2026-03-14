const hamburgerToogle = document.querySelector('.hamburger-toggle');
const navbarMenu      = document.querySelector('.nav-menu');
const sections        = document.querySelectorAll('section');
const navLinks        = document.querySelectorAll('.nav-links a');


/*Hamburger button: open / close mobile menu*/
hamburgerToogle.addEventListener('click', () => {
    hamburgerToogle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


/*Close nav panel when user clicks outside it*/
document.addEventListener('click', (e) => {
    if (
        !hamburgerToogle.contains(e.target) &&
        !navbarMenu.contains(e.target)
    ) {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});
/*Close nav panel when a nav link is tapped*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});
/*Highlight the active nav link on scroll*/
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
/*Menu category tab switching*/
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.menu-tab-btn');
    const categories = document.querySelectorAll('.menu-category');

    if (!tabButtons.length) return; 

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            categories.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');

            const target = btn.getAttribute('data-tab');
            const panel  = document.querySelector(
                `.menu-category[data-category="${target}"]`
            );
            if (panel) panel.classList.add('active');
        });
    });
});
