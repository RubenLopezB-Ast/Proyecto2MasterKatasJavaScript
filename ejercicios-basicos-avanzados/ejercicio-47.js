function revertirPalabras(frase) {
  return frase
    .split(" ")
    .map(p => p.split("").reverse().join(""))
    .join(" ");
}

console.log(revertirPalabras("Hola mundo"));