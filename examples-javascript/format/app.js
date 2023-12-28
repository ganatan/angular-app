let month = '1';

function zeroPad(text, count) {
  let zero = count - text.length + 1;
  return Array(+(zero > 0 && zero)).join("0") + text;
}

month = zeroPad(month, 2);
console.log('month:' + month);



month = zeroPad(month, 4);
console.log('month:' + month);

