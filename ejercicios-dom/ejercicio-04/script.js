// Evento click en el botón con id btnToClick
const btn = document.getElementById("btnToClick");
btn.addEventListener("click", (event) => {
  console.log("1.1 Click event:", event);
});

// Evento focus en el input con clase .focus
const focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", (event) => {
  console.log("1.2 Focus - valor actual:", event.target.value);
});

// Evento input en el input con clase .value
const valueInput = document.querySelector(".value");
valueInput.addEventListener("input", (event) => {
  console.log("1.3 Input - escribiendo:", event.target.value);
});
