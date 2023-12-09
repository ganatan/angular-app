console.log('00000000001');
const fetchSearch = async () => {

  console.log('00000000002');
  
  // const response = await fetch('https://api.ganatan.com/tutorials');
  const response = await fetch('./data/FishEyeData.json');
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('00000000003:' + JSON.stringify(response));
  const names = await response.json();
  console.log('00000000004:' + JSON.stringify(names));


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