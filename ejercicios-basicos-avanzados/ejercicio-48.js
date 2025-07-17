function sumaDigitosArray(arr) {
  return arr
    .join("")
    .split("")
    .filter(c => /\d/.test(c))
    .reduce((acc, d) => acc + parseInt(d), 0);
}

console.log(sumaDigitosArray([12, 34, 56]));