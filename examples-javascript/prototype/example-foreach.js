let arrayNumber = ['01', '02', '03', '04']
arrayNumber.forEach(element => {
  console.log('0000000001:forEach:' + element);
})

arrayNumber.forEach((element, index) => {
  console.log('0000000001:forEach and index:' + index + ':' + element);
})

for (i = 0; i < arrayNumber.length; i++) {
  console.log('0000000002:for:' + arrayNumber[i]);
}