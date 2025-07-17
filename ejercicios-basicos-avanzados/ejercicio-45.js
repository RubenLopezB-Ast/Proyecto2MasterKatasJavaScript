function arraysIguales(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(arraysIguales([1, 2, 3], [1, 2, 3]));
console.log(arraysIguales([1, 2], [2, 1]));