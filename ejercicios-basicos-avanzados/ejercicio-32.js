function estaOrdenado(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(estaOrdenado([1, 2, 3, 4]));
console.log(estaOrdenado([1, 3, 2, 4]));