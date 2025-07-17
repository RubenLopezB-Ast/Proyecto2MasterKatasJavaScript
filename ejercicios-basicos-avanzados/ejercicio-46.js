function generarRango(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

console.log(generarRango(5));