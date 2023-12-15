
function replaceName(name: string) {
  let nameTmp = name.replace("Steven", 'director');
  return nameTmp;
}

function replaceAllName(name: string) {
  let substring = 'Steven';
  let replacement = 'alldirector';
  let nameTmp = name.replace(new RegExp(substring, 'g'), replacement);
  return nameTmp;
}

function replaceAllSpace(name: string) {
  let substring = ' ';
  let replacement = '%20';
  let nameTmp = name.replace(new RegExp(substring, 'g'), replacement);
  return nameTmp;
}

function replaceAllSpace2(name: string) {
  let nameTmp = name.replace(new RegExp(' ', 'g'), '%20');
  return nameTmp;
}



let res = replaceName('Steven Spielberg');
console.log('replaceName:' + res);

let res2 = replaceName('Steven Steven Spielberg Spielberg');
console.log('replaceName:' + res2);

let res3 = replaceAllName('Steven Steven Spielberg Spielberg');
console.log('replaceAllName:' + res3);

let res4 = replaceAllSpace('Steven Spielberg is a Director');
console.log('replaceAllName:' + res4);

let res5 = replaceAllSpace2('Steven Spielberg is a Director');
console.log('replaceAllName:' + res5);
