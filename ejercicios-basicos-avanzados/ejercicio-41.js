function primosHasta(n) {
  const esPrimo = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const resultado = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) resultado.push(i);
  }
  return resultado;
}

console.log(primosHasta(20));