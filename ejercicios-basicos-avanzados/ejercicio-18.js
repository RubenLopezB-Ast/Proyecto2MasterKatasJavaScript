function sonAnagramas(palabra1, palabra2) {
  const normalizar = str =>
    str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
  return normalizar(palabra1) === normalizar(palabra2);
}

console.log(sonAnagramas("amor", "Roma"));