function contarElementos(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

console.log(contarElementos(["manzana", "pera", "manzana", "uva"]));
