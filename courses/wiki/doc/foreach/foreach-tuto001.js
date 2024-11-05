let media = [
  { name: 'Gladiator' },
  { name: 'Alien' },
]


/*

function getMedia(media) {
  media.forEach(element => {
    console.log(element)
  });
}

getMedia(media);

*/


function test(media) {
  media.forEach((riri, fifi, loulou, picsou) => {
    console.log(riri);
    console.log(fifi);
    console.log(loulou);
    console.log(picsou);
  })


  media.forEach(() => {
    console.log('00000000001');
  })


}

test(media);



