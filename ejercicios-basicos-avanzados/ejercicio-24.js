function esNumeroPerfecto(n) {
  if (n <= 1) return false;
  let suma = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) suma += i;
  }
  return suma === n;
}

console.log(esNumeroPerfecto(28));