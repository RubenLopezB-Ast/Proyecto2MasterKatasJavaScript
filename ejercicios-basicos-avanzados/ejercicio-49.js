function diasEntreFechas(fecha1, fecha2) {
  const f1 = new Date(fecha1);
  const f2 = new Date(fecha2);
  const diff = Math.abs(f2 - f1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log(diasEntreFechas("2024-01-01", "2024-01-10"));