// 1. Luke Skywalker cumple años
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log("Actualización de edad:", jedi);

// 2. Presentación al estilo Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 3. Calculando el coste total de sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
const total = sable1.precio + sable2.precio;
console.log("Precio total de los sables de luz:", total, "créditos");

// 4. Actualizando el precio final de las naves
let precioBaseGlobal = 25000; // actualizado
const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 0 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 0 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Precio final de", nave1.nombre + ":", nave1.precioFinal, "créditos");
console.log("Precio final de", nave2.nombre + ":", nave2.precioFinal, "créditos");
