const article = document.getElementById("juegos");
import json from "./games.json" assert { type: "json" };
for (var i in json) {
  const element = json[i];
  console.log(element.desc);
  const algon = document.createElement("h1");
  const imgJuego = document.createElement("div");
  const linkJuego = document.createElement("a");
  const img = document.createElement("img");
  const overlayJuego = document.createElement("div");
  const tituloJuego = document.createElement("p");
  const descJuego = document.createElement("p");
  const devJuego = document.createElement("p");

  if (element.reclamado == "false") {
    linkJuego.className = "linkJuego";
  } else {
    linkJuego.className = "linkJuego hidden";
  }
  linkJuego.href = element.steam;
  imgJuego.className = "imgJuego";
  img.src = element.imagen;
  img.alt = "";
  imgJuego.appendChild(img);
  if (element.reclamado == "false") {
    overlayJuego.className = "overlayJuego";
  } else {
    overlayJuego.className = "overlayJuego hidden";
  }

  tituloJuego.className = "tituloJuego";
  tituloJuego.textContent = element.nombre;

  descJuego.className = "descJuego";
  descJuego.textContent = element.desc;

  devJuego.className = "devJuego";
  devJuego.textContent = element.developer;

  overlayJuego.appendChild(tituloJuego);
  overlayJuego.appendChild(descJuego);
  overlayJuego.appendChild(devJuego);

  linkJuego.appendChild(imgJuego);
  linkJuego.appendChild(overlayJuego);

  article.appendChild(linkJuego);
}
