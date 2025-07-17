function capitalizarFrase(frase) {
  return frase
    .toLowerCase()
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

console.log(capitalizarFrase("hola Corazones, ¿Cómo va el verano?"));
