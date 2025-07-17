function valorMasFrecuente(arr) {
  const conteo = {};
  let max = 0;
  let masFrecuente = null;

  for (let num of arr) {
    conteo[num] = (conteo[num] || 0) + 1;
    if (conteo[num] > max) {
      max = conteo[num];
      masFrecuente = num;
    }
  }

  return masFrecuente;
}

console.log(valorMasFrecuente([1, 2, 2, 3, 3, 3, 4]));