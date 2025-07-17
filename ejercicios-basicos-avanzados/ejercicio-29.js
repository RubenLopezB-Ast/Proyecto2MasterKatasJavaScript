function limpiarArray(arr) {
  return arr.filter(Boolean);
}

console.log(limpiarArray([0, 1, false, 2, "", 3, null]));