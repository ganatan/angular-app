

function removeSpace(name: string) {
  let nameTmp = name.replace(new RegExp(' ', 'g'), '');
  return nameTmp;
}

let res01 = removeSpace('The kingdom of Heaven');
console.log('replaceName:' + res01);

let res02 = removeSpace('Alien Prometheus');
console.log('replaceName:' + res02);
