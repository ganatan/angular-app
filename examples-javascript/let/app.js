let movie = 'Gladiator';

movie = movie + '-add';


console.log('00000000001:movie:' + movie);

let moviePrice = 14;
let movieNumber = 4;
let movieTotal = moviePrice / movieNumber;
let movieTotalReste = moviePrice % movieNumber;

console.log('00000000002:movieTotal:' + movieTotal);
console.log('00000000003:movieTotal2:' + movieTotalReste);

console.log(Math.trunc(1234.5678));
console.log(Math.trunc(0.1234));
console.log(Math.trunc(-0.1234));


let count = 0;
console.log(count);
count++;
console.log(count);
count = 10;
console.log(count);


let movieCount = 10;
console.log('movieCount:' + movieCount);
movieCount += 5;
console.log('movieCount:' + movieCount);
movieCount /= 3;
console.log('movieCount:' + movieCount);
movieCount++;
console.log('movieCount:' + movieCount);
