function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(esEmailValido("correo@ejemplo.com"));
console.log(esEmailValido("correo.com"));