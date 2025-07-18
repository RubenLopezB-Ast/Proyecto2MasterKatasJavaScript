// Mete div vacío
const div1 = document.createElement("div");
document.body.appendChild(div1);

// Mete div con una p
const div2 = document.createElement("div");
const p1 = document.createElement("p");
p1.textContent = "Hola desde dentro del div.";
div2.appendChild(p1);
document.body.appendChild(div2);

// Mete div con 6 <p> usando un bucle
const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo ${i + 1}`;
  div3.appendChild(p);
}
document.body.appendChild(div3);

// Mete una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

// Mete en el h2 con clase .fn-insert-here el texto indicado
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// Crea una lista con los elementos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
apps.forEach(app => {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// Quita todos los nodos con clase .fn-remove-me
document.querySelectorAll(".fn-remove-me").forEach(el => el.remove());

// Mete una p con el texto entre los dos primeros div
const todosDivs = document.querySelectorAll("div");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
document.body.insertBefore(pMedio, todosDivs[1]);

// Mete una p con el texto dentro de todos los div con clase .fn-insert-here
document.querySelectorAll("div.fn-insert-here").forEach(div => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
});
