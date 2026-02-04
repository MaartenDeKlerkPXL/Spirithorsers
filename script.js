const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu op mobiel
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sluit menu als je op een link klikt (handig voor mobiel)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.parentNode.classList.contains('dropdown')) {
            navLinks.classList.remove('active');
        }
    });
});