document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  const contacto = document.getElementById("contacto");

  const enlacesInicio = [
    { texto: "Tablas", enlace: "https://www.example.com/tablas" },
    { texto: "Formularios", enlace: "https://www.example.com/formularios" },
    {
      texto: "Media Queries y Breakpoints",
      enlace: "https://www.example.com/media-queries",
    },
    { texto: "Galería de Imágenes", enlace: "https://www.example.com/galeria" },
    {
      texto: "Ejercicios JavaScript",
      enlace: "https://www.example.com/ejercicios",
    },
    {
      texto: "Estudio del color verde",
      enlace: "https://grupo3bg2023.wixsite.com/trabajo-3bg/post/verde-claro",
    },
    {
      texto: "Presentaciones",
      enlace: "https://www.example.com/presentaciones",
    },
  ];

  const enlacesContacto = [
    { texto: "WhatsApp", enlace: "https://www.example.com/whatsapp" },
    { texto: "E-Mail", enlace: "https://www.example.com/email" },
  ];

  const listaInicio = document.createElement("ul");
  enlacesInicio.forEach((enlace) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = enlace.texto;
    a.onclick = function () {
      window.open(enlace.enlace, "_blank");
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
    a.onclick = function () {
      window.open(enlace.enlace, "_blank");
    };
    li.appendChild(a);
    listaContacto.appendChild(li);
  });

  inicio.appendChild(listaInicio);
  contacto.appendChild(listaContacto);
});
