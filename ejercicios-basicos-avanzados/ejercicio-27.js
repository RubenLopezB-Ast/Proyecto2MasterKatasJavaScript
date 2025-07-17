function espaciosPorGuiones(texto) {
  return texto.trim().replace(/\s+/g, "-");
}

console.log(espaciosPorGuiones("Este es un ejercicio de espacios y guiones"));
