let media = [
  { name: 'Gladiator' },
  { name: 'Alien' },
]

function showMedia(media) {
  media.map((element,index,tab,toto) => {
    console.log('00000000001:' + JSON.stringify(element));
    console.log('00000000001:' + index);
    console.log('00000000001:' + JSON.stringify(tab));
    console.log('00000000001:' + toto);
  });
}

showMedia(media);