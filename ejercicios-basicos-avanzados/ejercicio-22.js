function sumarDigitos(numero) {
  return numero
    .toString()
    .split("")
    .filter(d => /\d/.test(d))
    .reduce((acc, d) => acc + parseInt(d), 0);
}

console.log(sumarDigitos(2025));