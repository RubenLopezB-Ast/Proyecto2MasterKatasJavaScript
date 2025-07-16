function filtrarNumerosUnicos(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}


console.log(filtrarNumerosUnicos([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
