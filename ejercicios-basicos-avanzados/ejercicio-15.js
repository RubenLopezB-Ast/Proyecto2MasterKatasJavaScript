function contarLetras(texto) {
  const resultado = {};
  for (let letra of texto.toLowerCase()) {
    if (/[a-z]/.test(letra)) {
      resultado[letra] = (resultado[letra] || 0) + 1;
    }
  }
  return resultado;
}

console.log(contarLetras("Cuento que número de cada letra hay en esta frase"));
