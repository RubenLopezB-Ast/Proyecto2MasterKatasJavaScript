function contarMayoresQue(arr, limite) {
  return arr.filter(num => num > limite).length;
}

console.log(contarMayoresQue([10, 5, 8, 20, 2], 7));