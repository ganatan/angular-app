let text = 'The kingdom of heaven'


function replaceAllName(name) {
  let nameTmp = name.replaceAll(" ", '');
  return nameTmp;
}
let result = replaceAllName(text);
console.log('remove space : ' + result);