function eliminarDuplicadosSinSet(arr) {
  const resultado = [];
  for (let item of arr) {
    if (!resultado.includes(item)) resultado.push(item);
  }
  return resultado;
}

console.log(eliminarDuplicadosSinSet([1, 2, 2, 3, 3, 4]));