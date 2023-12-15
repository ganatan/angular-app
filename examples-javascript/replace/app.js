
function replaceName(name) {
  let nameTmp = name.replace("Steven", 'director');
  return nameTmp;
}

function replaceAllName(name) {
  let nameTmp = name.replaceAll("Steven", 'alldirector');
  return nameTmp;
}

function replaceAllSpace(name) {
  let nameTmp = name.replaceAll(" ", '%20');
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


