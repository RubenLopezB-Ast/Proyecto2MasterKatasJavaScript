function eliminarDuplicados(arr) {
  return [...new Set(arr)];
}

console.log(eliminarDuplicados([1, 2, 2, 3, 3, 3, 4]));
