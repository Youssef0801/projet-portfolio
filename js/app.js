document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");
    // Sélectionnez le bouton pour activer/désactiver le mode sombre
    const toggleDarkModeButton = document.querySelector('button');
    const icon = document.querySelector('.material-symbols-outlined');

    // Ajoutez un gestionnaire d'événements pour basculer le mode sombre
    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode-bg');
        icon.classList.toggle("dark-logo");
    });
});
// Gestion du thème
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});

// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});