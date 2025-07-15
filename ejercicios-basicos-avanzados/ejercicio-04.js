// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log("4.1:", aldeanos[3]);

// 4.2 - Coloca en el último lugar a "Cervasio"
aldeanos.push("Cervasio");
console.log("4.2:", aldeanos);

// 4.3 - Cambia el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log("4.3:", aldeanos);

// 4.4 - Dale la vuelta al array
aldeanos.reverse();
console.log("4.4:", aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela"
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos[indexNarciso] = "Canela";
}
console.log("4.5:", aldeanos);

// 4.6 - Imprime el último elemento sin atacar a la posición directamente
console.log("4.6:", aldeanos[aldeanos.length - 1]);
