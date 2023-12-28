// Cette fonction charge le contenu de l'en-tête et du pied de page et les insère dans les conteneurs
function loadComponent(componentPath, containerId) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((err) => console.error(`Could not load ${componentPath}:`, err));
}

// Utilisation de la fonction pour charger l'en-tête et le pied de page
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/header.html", "header-container");
  // loadComponent("footer.html", "footer-container");
});
