function invertirPalabras(frase) {
  return frase
    .split(" ")
    .map(p => p.split("").reverse().join(""))
    .join(" ");
}

console.log(invertirPalabras("Ahora lo que hago es invertir palabras en una misma frase"));
