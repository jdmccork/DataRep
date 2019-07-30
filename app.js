const decimalInput = document.querySelector("#decimal > input");
const binaryInput = document.querySelector("#binary > input");
const octalInput = document.querySelector("#octal > input");
const hexadecimalInput = document.querySelector("#hexadecimal > input");

function decConvert(){
  var dec = parseFloat(decimalInput.value);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  binaryInput.value = bin;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
}

function binConvert(){
  var bin = parseFloat(binaryInput.value);
  var dec = parseInt(bin,2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
}

function octConvert(){
  var oct = parseFloat(octalInput.value);
  var dec = parseInt(oct,8);
  console.log(dec);
  var bin = dec.toString(2);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  binaryInput.value = bin;
  hexadecimalInput.value = hex;
}

function hexConvert(){
  var hex = parseFloat(hexadecimalInput.value);
  var dec = parseInt(hex,16);
  console.log(dec);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  decimalInput.value = dec;
  binaryInput.value = bin;
  octalInput.value = oct;
}

function main(){
  decimalInput.addEventListener('input',decConvert);
  binaryInput.addEventListener('input',binConvert);
  octalInput.addEventListener('input',octConvert);
  hexadecimalInput.addEventListener('input',hexConvert);
}

main();



/*
function binIn(){
  const temp = parseFloat(binaryInput.value);
  const dec = parseInt(temp,2);
  conAll(dec);
}

function octIn(){
  var temp = parseFloat(octalInput.value);
  const dec = parseInt(temp,8);
  conAll(dec);
}





function conAll(dec){
  const bin = parseInt(dec % 2)
  console.log(dec)
  const oct = parseInt(dec % 8)
  //const oct = parseInt(dec,8);
  const hex = parseInt(dec,16);
  decimalInput.value = dec;
  binaryInput.value = bin;
  octalInput.value = oct;
}

function tester(){
  var test1 = parseFloat(octalInput.value);
  var test2 = parseInt(test1,8);//makes hex into dec
  console.log(test1);
  console.log(test2);
}
*/
