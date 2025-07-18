const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear lista ul
const ul = document.createElement("ul");

// Crear li por cada álbum
albums.forEach(album => {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
});

// Insertar en el contenedor
const container = document.getElementById("album-container");
container.appendChild(ul);
