function contarOcurrencias(frase, palabra) {
  const expresion = new RegExp(`\\b${palabra}\\b`, "gi");
  return (frase.match(expresion) || []).length;
}

console.log(contarOcurrencias("Pues en este ejercicio que ves estoy contando las veces que escribo en", "en"));
