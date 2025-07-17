function palabraMasLarga(frase) {
  return frase
    .split(" ")
    .reduce((max, actual) => actual.length > max.length ? actual : max, "");
}

console.log(palabraMasLarga("Ahora voy a sacar por consola la palabra más larga como por ejemplo supercalifragilísticoespialidoso"));
