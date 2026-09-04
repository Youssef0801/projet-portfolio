document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector('.theme-toggle');

    // Vérifie si le bouton est correctement trouvé
    if (!themeToggleButton) {
        console.error("Le bouton .theme-toggle n'a pas été trouvé !");
        return;
    }

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        console.log(`Thème changé vers : ${newTheme}`);
    });
});
/* ========================================
   PANNEAU VERSION MOBILE
======================================== */

const mobileWarning = document.getElementById("mobileWarning");
const closeButton = document.getElementById("mobileWarningClose");
const continueButton = document.getElementById("mobileWarningContinue");

function closeMobileWarning() {
    mobileWarning.style.display = "none";
}

closeButton.addEventListener("click", closeMobileWarning);

continueButton.addEventListener("click", closeMobileWarning);