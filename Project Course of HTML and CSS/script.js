// Xaaji Daahir  Menu for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Change Navbar Background on Scroll
window.onscroll = function() { changeNavbarBg() };

function changeNavbarBg() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header').style.backgroundColor = "#1f1f1f";
    } else {
        document.querySelector('.header').style.backgroundColor = "#121212";
    }
}