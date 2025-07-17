function calcularMedia(arr) {
  if (arr.length === 0) return 0;
  const suma = arr.reduce((acc, val) => acc + val, 0);
  return suma / arr.length;
}

console.log(calcularMedia([5, 10, 15]));