// Oculta todo el contenido de la página al inicio
Array.from(document.body.children).forEach(function (child) {
  if (!child.classList.contains("loader")) {
    child.style.display = "none";
  }
});

window.addEventListener("load", function () {
  // Muestra el loader durante 2.2 segundos, luego oculta el loader y muestra el contenido de la página
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    Array.from(document.body.children).forEach(function (child) {
      if (!child.classList.contains("loader")) {
        child.style.display = "";
      }
    });
    document.body.style.backgroundColor = "";
    document.body.style.overflow = "";
  }, 2500);
});
