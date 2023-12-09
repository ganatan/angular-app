console.log('00000000001');


function myFunction1() {
  console.log('00000000001:myFunction1');

}

function myFunction2() {
  console.log('00000000001:myFunction2');

}



const fetchSearch = async () => {

  console.log('00000000002');

  // const response = await fetch('https://api.ganatan.com/tutorials');
  const response = await fetch('./data/FishEyeData.json');
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('00000000003:' + JSON.stringify(response));
  const names = await response.json();
  console.log('00000000004:' + JSON.stringify(names));


  var logElem = document.querySelector(".idexemple");
  // logElem.innerHTML = "aaaaa";
  logElem.innerHTML = `<button onclick="myFunction2()">Click me myFunction2</button>`;
  


  /*  console.log('00000000012');
    const response1 = await fetch('FishEyeData.json');
    console.log('00000000013:' + JSON.stringify(response1));
    const names1 = await response1.json();
    console.log('00000000014:' + JSON.stringify(names1));
  
    console.log('00000000005');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        console.log('00000000006:' + JSON.stringify(response));
        response.json()
      }
      )
      .then((data) => {
        console.log('00000000007:' + JSON.stringify(data));
        console.log(data)
      }
      ); */

};


fetchSearch();