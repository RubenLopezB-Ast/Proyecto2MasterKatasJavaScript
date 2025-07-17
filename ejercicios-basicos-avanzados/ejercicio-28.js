function segundoMayor(arr) {
  const únicos = [...new Set(arr)];
  únicos.sort((a, b) => b - a);
  return únicos[1] !== undefined ? únicos[1] : null;
}

console.log(segundoMayor([10, 20, 20, 30, 40]));