function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  return [...texto].filter(c => vocales.includes(c)).length;
}


console.log(contarVocales("Estoy contando vocales"));
