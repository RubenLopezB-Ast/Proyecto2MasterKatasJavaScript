function soloLetras(texto) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(texto);
}

console.log(soloLetras("Hola amigos"));
console.log(soloLetras("Hola123"));