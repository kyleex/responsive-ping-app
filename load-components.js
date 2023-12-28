// Fonction pour charger un composant dans un conteneur spécifié par son ID
function loadComponent(url, containerId, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch((err) => console.error(`Error loading ${url}: `, err));
}

// Chargez le contenu du header et du nav à l'aide de la fonction définie ci-dessus

// Exemple d'utilisation pour charger le header
loadComponent("components/header.html", "header-container", function () {
  // Assurez-vous que l'icône hamburger est présente puis créez l'écouteur d'événement
  let openMenuBtn = document.getElementById("open-menu-btn");
  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", openMenu);
  } else {
    console.error("Hamburger icon not found after loading header");
  }
});

// Charger la barre de navigation
loadComponent("components/nav.html", "nav-container", function () {
  // Assurez-vous que le bouton de fermeture du menu est là, puis mettez en place l'écouteur d'événements
  let closeMenuBtn = document.getElementById("close-menu-btn");
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  } else {
    console.error("Close menu button not found after loading navbar");
  }
});
