function toggleMenu() {
  const menu = document.getElementById("side-menu");
  // Questa riga aggiunge o toglie la classe "active" al menu
  menu.classList.toggle("active");
}

// Opzionale: Chiude il menu se clicchi fuori (sul contenuto della pagina)
document.addEventListener("click", function (event) {
  const menu = document.getElementById("side-menu");
  const btn = document.getElementById("menu-btn");

  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.remove("active");
  }
});
