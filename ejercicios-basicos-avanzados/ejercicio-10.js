function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primosHasta(numero) {
  const resultado = [];
  for (let i = 2; i <= numero; i++) {
    if (esPrimo(i)) resultado.push(i);
  }
  return resultado;
}

console.log(primosHasta(23));
