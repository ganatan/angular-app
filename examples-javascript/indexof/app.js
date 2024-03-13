/*

let text = 'https://example.com/param1.jpg 140w, https://example.com/param2.jpg 210w, https://example.com/param3.jpg 280w';

let param1 = '';
let param2 = '';
let param3 = '';

let index1 = text.indexOf("https");
let index2 = text.indexOf("https", index1 + 1);
let index3 = text.indexOf("https", index2 + 1);

param1 = text.substring(index1, index2 - 2)
param2 = text.substring(index2, index3 - 2)
param3 = text.substring(index3, text.length)

console.log('index1:' + index1);
console.log('index2:' + index2);
console.log('index3:' + index3);

console.log('param1:' + param1);
console.log('param2:' + param2);
console.log('param3:' + param3);


let text2 = 'https://example.com/param1.jpg 140w, https://example.com/param2.jpg 210w';


let index21 = text2.lastIndexOf("https");
let param21 = text2.substring(index21, text2.length)
console.log('index21:' + index21);
console.log('param21:' + param21);

*/

let url1 = 'http://localhost:3101/API/documents?_format=param1&_load=requests';
let url2 = 'http://localhost:3101/API/documents?_format=param2';
let url3 = 'http://localhost:3101/API/documents?_format=&_load=requests';
let url4 = 'http://localhost:3101/API/documents?_format=&test&test2';
let url5 = 'http://localhost:3101/API/documents?_load=requests';

function getUrlWithNewParam(url,addParam) {
  let urlTest = url;
  let urlWithNewParam = urlTest;
  let indexFormat = urlTest.indexOf("_format=");
  let urlFormat = urlTest;
  let urlParam = '';
  let urlEnd = '';
  let param = '';
  if (indexFormat !== -1) {
    urlFormat = urlTest.substring(0, indexFormat + 8);
    urlParam = urlTest.substring(indexFormat + 8, urlTest.length);
    let indexSep = urlParam.indexOf("&");
    param = urlParam;
    urlEnd = urlParam;
    if (indexSep !== -1) {
      param = urlParam.substring(0, indexSep);
      urlEnd = urlParam.substring(indexSep, urlParam.length);
    } else {
      urlEnd = '';
    }
    urlWithNewParam = urlFormat + param + addParam + urlEnd;
  }
  /*
  console.log('');
  console.log('');
  console.log('url             :' + url);
  console.log('urlFormat       :' + urlFormat);
  console.log('urlParam        :' + urlParam);
  console.log('param           :' + param);
  console.log('urlEnd          :' + urlEnd);
  console.log('');
  console.log('');
*/
  return urlWithNewParam;
}

console.log('urlWithNewParam :' + getUrlWithNewParam(url1,'pdf'));
console.log('urlWithNewParam :' + getUrlWithNewParam(url2,'pdf'));
console.log('urlWithNewParam :' + getUrlWithNewParam(url3,'pdf'));
console.log('urlWithNewParam :' + getUrlWithNewParam(url4,'pdf'));
console.log('urlWithNewParam :' + getUrlWithNewParam(url5,'pdf'));

