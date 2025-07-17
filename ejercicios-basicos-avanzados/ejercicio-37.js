function sumaPares(arr) {
  return arr.filter(n => n % 2 === 0).reduce((acc, val) => acc + val, 0);
}

console.log(sumaPares([1, 2, 3, 4, 5, 6]));