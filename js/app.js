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

/* Vérifie si le visiteur a déjà fermé le panneau */
const mobileWarningSeen = sessionStorage.getItem("mobileWarningSeen");

/* Si le panneau a déjà été vu, on le cache */
if (mobileWarningSeen === "true") {
    mobileWarning.style.display = "none";
}

/* Fonction pour fermer le panneau */
function closeMobileWarning() {

    mobileWarning.style.display = "none";

    /* On mémorise que le visiteur l'a déjà vu */
    sessionStorage.setItem("mobileWarningSeen", "true");
}

/* Clic sur la croix */
closeButton.addEventListener("click", closeMobileWarning);

/* Clic sur "Voir quand même" */
continueButton.addEventListener("click", closeMobileWarning);