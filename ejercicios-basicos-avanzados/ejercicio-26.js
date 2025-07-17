function contarVocales(texto) {
  return (texto.match(/[aeiouáéíóúü]/gi) || []).length;
}

console.log(contarVocales("Programación en JavaScript"));
