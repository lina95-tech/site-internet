// Affiche un message de bienvenue quand la page charge
window.addEventListener("load", () => {
    alert("Bienvenue sur mon site d'esthetiqye!");
});

// Change la couleur du titre quand on clique dessus
const titre = document.querySelector("h1");
titre.addEventListener("click", () => {
    titre.style.color = "purple";
    titre.textContent = "HUDA BEAUTY";
})
