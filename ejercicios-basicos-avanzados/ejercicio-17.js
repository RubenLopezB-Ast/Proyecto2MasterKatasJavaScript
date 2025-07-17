function invertirNumero(num) {
  const invertido = Math.abs(num).toString().split('').reverse().join('');
  return num < 0 ? -parseInt(invertido) : parseInt(invertido);
}

console.log(invertirNumero(1234));
console.log(invertirNumero(-5678));