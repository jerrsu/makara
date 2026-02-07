// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});
// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('navbar-glass');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('navbar-glass');
    }
});

fetch('partials/navbar.html')
    .then(res => res.text())
    .then(html => document.getElementById('navbar').innerHTML = html);

fetch('partials/footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer').innerHTML = html);