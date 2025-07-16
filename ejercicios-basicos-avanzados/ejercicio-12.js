function contarPalabras(frase) {
  const palabras = frase.trim().split(/\s+/);
  return palabras.length;
}

console.log(contarPalabras("En este ejercicio cuento palabras"));
