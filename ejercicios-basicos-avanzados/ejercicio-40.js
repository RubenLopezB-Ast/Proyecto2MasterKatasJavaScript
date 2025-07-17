function limpiarValoresNulos(arr) {
  return arr.filter(v => v !== null && v !== undefined && !Number.isNaN(v));
}

console.log(limpiarValoresNulos([1, null, 2, undefined, 3, NaN, 4]));
