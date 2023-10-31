// Ahora las páginas locales se abren directamente en la página sin el uso de "_blank"

document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");

  const enlacesInicio = [
    { texto: "Tablas", enlace: "tables.html", target: "_self" },
    { texto: "Formularios", enlace: "forms.html", target: "_self" },
    {
      texto: "Media Queries y Breakpoints",
      enlace: "https://challenge.behnesc.repl.co/",
    },
    { texto: "Galería de Imágenes", enlace: "galery.html", target: "_self" },
    {
      texto: "Ejercicios JavaScript",
      enlace: "javascripts.html",
      target: "_self",
    },
    {
      texto: "Estudio del color verde",
      enlace: "https://grupo3bg2023.wixsite.com/trabajo-3bg/post/verde-claro",
    },
    {
      texto: "Presentaciones",
      enlace: "presentations.html",
      target: "_self",
    },
  ];

  const enlacesContacto = [
    { texto: "WhatsApp", enlace: "https://bit.ly/home-number" },
    { texto: "E-Mail", enlace: "mailto:student.behn@gmail.com" },
  ];

  const listaInicio = document.createElement("ul");
  enlacesInicio.forEach((enlace) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = enlace.texto;
    a.onclick = function (event) {
      event.preventDefault();
      window.open(enlace.enlace, enlace.target || "_blank");
    };
    li.appendChild(a);
    listaInicio.appendChild(li);
  });

  const listaContacto = document.createElement("ul");
  enlacesContacto.forEach((enlace) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = enlace.texto;
    a.onclick = function (event) {
      event.preventDefault();
      window.open(enlace.enlace, "_blank");
    };
    li.appendChild(a);
    listaContacto.appendChild(li);
  });

  inicio.appendChild(listaInicio);
  contacto.appendChild(listaContacto);
});
