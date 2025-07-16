function palabraMasLarga(frase) {
  const palabras = frase.split(" ");
  return palabras.reduce((max, actual) =>
    actual.length > max.length ? actual : max
  );
}

console.log(palabraMasLarga("Ahora estoy contando la palabra más larga de esta misma frases"));
