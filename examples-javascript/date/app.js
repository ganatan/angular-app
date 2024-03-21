function lastDayFebruary(year) {
  const yearInt = parseInt(year, 10);
  const isBissextile = (yearInt % 4 === 0 && yearInt % 100 !== 0) || (yearInt % 400 === 0);
  const dayFebruary = isBissextile ? 29 : 28;
  let result = new Date(yearInt, 1, dayFebruary);
  result = result.toLocaleDateString('fr-FR', { day: '2-digit' });
  return result;
}

const year = "1970";
const lastDay = lastDayFebruary(year);
console.log("lastDayFebruary " + lastDay);
