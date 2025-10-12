// Affiche un message de bienvenue quand la page charge
window.addEventListener("load", () => {
    alert("Bienvenue sur mon site !");
});

// Change la couleur du titre quand on clique dessus
const titre = document.querySelector("h1");
titre.addEventListener("click", () => {
    titre.style.color = "purple";
    titre.textContent = "MARRUECO";
})

// Fait apparaître une petite animation au survol des boutons du menu
const liens = document.querySelectorAll("nav a");
liens.forEach(lien => {
    lien.addEventListener("mouseenter", () => {
        lien.style.transform = "scale(1.2)";
        lien.style.transition = "0.3s";
        lien.style.color = "purple";
    });
    lien.addEventListener("mouseleave", () => {
        lien.style.transform = "scale(1)";
        lien.style.color = "black";
    });
});

