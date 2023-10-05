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