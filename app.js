const decimalInput = document.querySelector("#decimal > input");
const binaryInput = document.querySelector("#binary > input");
const octalInput = document.querySelector("#octal > input");
const hexadecimalInput = document.querySelector("#hexadecimal > input");
//const asciiInput = document.querySelector("#ascii > input");

function decConvert(){
  var dec = parseFloat(decimalInput.value);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  //var ascii = String.fromCharCode(dec);
  binaryInput.value = bin;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
  //asciiInput.value = ascii;
}

function binConvert(){
  var bin = parseFloat(binaryInput.value);
  var dec = parseInt(bin,2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  //var ascii = String.fromCharCode(dec);
  decimalInput.value = dec;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
  //asciiInput.value = ascii;
}

function octConvert(){
  var oct = parseFloat(octalInput.value);
  var re = /^[0-7]+$/;
  if(!re.test(octalInput.value)) {
    alert("Error: All numbers must be within 0-7 for octal input");
    octalInput.value = oct;
    octalInput.focus();

    return false;
  }
  var dec = parseInt(oct,8);
  var bin = dec.toString(2);
  var hex = dec.toString(16);
  //var ascii = String.fromCharCode(dec);
  decimalInput.value = dec;
  binaryInput.value = bin;
  hexadecimalInput.value = hex;
  //asciiInput.value = ascii;
}

function hexConvert(){
  var hex = hexadecimalInput.value;
  var dec = parseInt(hex,16);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  //var ascii = String.fromCharCode(dec);
  decimalInput.value = dec;
  binaryInput.value = bin;
  octalInput.value = oct;
  //asciiInput.value = ascii;
}

/*function asciiConvert(){
  var ascii = asciiInput.value;
  var dec = ascii.charAt(0);
  console.log(dec);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  binaryInput.value = bin;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
}
*/

function main(){
  decimalInput.addEventListener('input',decConvert);
  binaryInput.addEventListener('input',binConvert);
  octalInput.addEventListener('input',octConvert);
  hexadecimalInput.addEventListener('input',hexConvert);
  //asciiInput.addEventListener('input',asciiConvert);
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
