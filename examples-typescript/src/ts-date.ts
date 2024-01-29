console.log('-------------------------------');

function zeroPad(text: string, count: number) {
  let zero = count - text.length + 1;
  return Array(+(zero > 0 && zero)).join("0") + text;
}

function formatISOYear(date: Date): string {
  const year = date.getFullYear();
  return `${year}`;
}

function formatISOMonth(date: Date): string {
  let month = (date.getMonth() + 1).toString();
  month = zeroPad(month, 2)
  return `${month}`;
}

function formatISODay(date: Date): string {
  let day = date.getDate().toString();
  day = zeroPad(day, 2);
  return `${day}`;
}

const today = new Date();

console.log(formatISOYear(today));
console.log(formatISOMonth(today));
console.log(formatISODay(today));

