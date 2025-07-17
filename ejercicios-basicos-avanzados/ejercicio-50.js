function contienePalabra(frase, palabra) {
  return frase.toLowerCase().includes(palabra.toLowerCase());
}

console.log(contienePalabra("Como veis si contiene la palabra clave", "si")); // true
console.log(contienePalabra("Hola corazones", "fín"));
