// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// when humberger on click
document.querySelector("#humberger-menu").onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function (e) {
    if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});