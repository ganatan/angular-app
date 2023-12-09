console.log('00000000001');


function myFunction1() {
  console.log('00000000001:myFunction1');

}

function myFunction2() {
  console.log('00000000001:myFunction2');

}

function myFunction3() {
  console.log('00000000001:myFunction3');

}

function loading() {
  console.log('00000000001:loading');
  // element.addEventListener('click', function() { /* do stuff here*/ }, false);
  
  const elem = document.getElementById('idexemple');
  elem.style.color = "red";
  elem.addEventListener('click', function() { 
    console.log('00000000001:addEventListener');
  }, false);

}


loading();