// S'exécute lorsque le DOM est entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Récupération de l'élément open-menu-btn et close-menu-btn
  let openMenuBtn = document.getElementById("open-menu-btn");
  let closeMenuBtn = document.getElementById("close-menu-btn");

  // Vérification de l'existence de l'élément openMenuBtn avant de continuer
  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", openMenu);
  } else {
    // Si l'élément n'existe pas, affichage d'un message d'erreur dans la console
    console.error("Open menu button not found");
  }

  // Vérification de l'existence de l'élément closeMenuBtn avant de continuer
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  } else {
    // Si l'élément n'existe pas, affichage d'un message d'erreur dans la console
    console.error("Close menu button not found");
  }
});

// Fonction pour ouvrir le menu
function openMenu() {
  let sidebar = document.getElementById("nav-container");
  if (sidebar) {
    sidebar.style.display = "flex"; // ou 'block' si votre sidebar n'est pas un flex container
  } else {
    console.error("The sidebar element was not found.");
  }
}

// Fonction pour fermer le menu
function closeMenu() {
  let sidebar = document.getElementById("nav-container"); // Trouve l'élément sidebar par son ID
  if (sidebar) {
    sidebar.style.display = "none"; // Change le style `display` pour cacher la sidebar
  } else {
    console.error("The sidebar element was not found.");
  }
}

// Attacher l'événement de clic à l'icône hamburger pour basculer le menu

// Ce code initie l'écouteur d'événement au clic sur l'icône hamburger. Lorsque l'icône est cliquée,
// la fonction `toggleMenu` est appelée. La fonction `toggleMenu` vérifie l'état de la sidebar,
// et en fonction de cet état, soit appelle `openMenu` pour afficher la sidebar,
// soit appelle `closeMenu` pour cacher la sidebar.
