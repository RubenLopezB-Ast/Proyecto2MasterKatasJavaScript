// Crear lista ul > li con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul1 = document.createElement("ul");
countries.forEach(country => {
  const li = document.createElement("li");
  li.textContent = country;
  ul1.appendChild(li);
});
document.body.appendChild(ul1);

// Quitar el elemento con clase .fn-remove-me
const removeMe = document.querySelector(".fn-remove-me");
if (removeMe) removeMe.remove();

// Lista ul > li de coches en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement("ul");
cars.forEach(car => {
  const li = document.createElement("li");
  li.textContent = car;
  ul2.appendChild(li);
});
const container = document.querySelector('[data-function="printHere"]');
container.appendChild(ul2);

// Crear divs h4 e imagen
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const divWrapper = document.createElement("div");

countries2.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("country-box");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar este";

  deleteBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(deleteBtn);
  divWrapper.appendChild(div);
});

document.body.appendChild(divWrapper);

// Botón eliminar el último div
const deleteLast = document.createElement("button");
deleteLast.textContent = "Eliminar el último div";

deleteLast.addEventListener("click", () => {
  const allDivs = document.querySelectorAll(".country-box");
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove();
  }
});

document.body.appendChild(deleteLast);
