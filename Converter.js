const decimalInput = document.querySelector("#decimal > input");
const binaryInput = document.querySelector("#binary > input");
const octalInput = document.querySelector("#octal > input");
const hexadecimalInput = document.querySelector("#hexadecimal > input");
decOld = '';
binOld = '';
octOld = '';
hexOld = '';

function decConvert(){
  var dec = parseFloat(decimalInput.value);
  if (decimalInput.value==''){
    binaryInput.value = '';
    octalInput.value = '';
    hexadecimalInput.value = '';
    return;
  }
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  binaryInput.value = bin;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
  decOld = parseFloat(dec);
  octOld = parseFloat(oct);
  binOld = parseFloat(bin);
}

function binConvert(){
  re = /[2-9]/;
  if (binaryInput.value==''){
    decimalInput.value = '';
    octalInput.value = '';
    hexadecimalInput.value = '';
    decOld = '';
    binOld = '';
    octOld = '';
    return;
  }
  while(binaryInput.value.includes("2") || binaryInput.value.includes("9")) {
    if(binaryInput.value==binOld+1) {
      while(binaryInput.value.includes("2") || binaryInput.value.includes("9")){
        if (octalInput.value<0){
          binaryInput.value=parseInt(binaryInput.value)+8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('9')+1));
        }else{
        binaryInput.value=parseInt(binaryInput.value)+8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('2')+1));
        }
      }
    } else if(binaryInput.value==binOld-1) {
      while(binaryInput.value.includes("2") || binaryInput.value.includes("9")){
        if(octalInput.value<0){
          binaryInput.value=parseInt(binaryInput.value)-8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('2')+1));
        }else{
          binaryInput.value=parseInt(binaryInput.value)-8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('9')+1)); //2*position of incorrect value 10^position
        }
      }
    }else{
      alert("Error: Binary inputs can only contain 1 or 0");
      binaryInput.value = binOld;
      binaryInput.focus();
      return false;
    }
  }
  if(re.test(binaryInput.value)){
    alert("Error: Binary inputs can only contain 1 or 0");
    binaryInput.value = binOld;
    binaryInput.focus();
    return false;
  }
  var bin = parseFloat(binaryInput.value);
  var dec = parseInt(bin,2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
  decOld = parseFloat(dec);
  binOld = parseFloat(bin);
  octOld = parseFloat(oct);
}

function octConvert(){
  if (octalInput.value==''){
    decimalInput.value = '';
    binaryInput.value = '';
    hexadecimalInput.value = '';
    decOld = '';
    octOld = '';
    binOld = '';
    return;
  }
  while(octalInput.value.includes("8") || octalInput.value.includes("9")) {
    if(octalInput.value==octOld+1) {
      while(octalInput.value.includes("8") || octalInput.value.includes("9")){
        if (octalInput.value<0){
          octalInput.value=parseInt(octalInput.value)+2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('9')+1));
        }else{
        octalInput.value=parseInt(octalInput.value)+2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('8')+1));
        }
      }
    } else if(octalInput.value==octOld-1) {
      while(octalInput.value.includes("8") || octalInput.value.includes("9")){
        if(octalInput.value<0){
          octalInput.value=parseInt(octalInput.value)-2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('8')+1));
        }else{
          octalInput.value=parseInt(octalInput.value)-2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('9')+1)); //2*position of incorrect value 10^position
        }
      }
    } else {
      alert("Error: All numbers must be within 0-7 for octal input");
      octalInput.value = octOld;
      octalInput.focus();
      return false;
    }
  }
  var oct = parseFloat(octalInput.value);
  var dec = parseInt(oct,8);
  var bin = dec.toString(2);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  binaryInput.value = bin;
  hexadecimalInput.value = hex;
  decOld = parseFloat(dec);
  octOld = parseFloat(oct);
  binOld = parseFloat(bin);
}

function hexConvert(){
  var hex = hexadecimalInput.value;
  var re = /[0-9a-fA-F]/;
  if (hexadecimalInput.value=='' || hexadecimalInput.value=='-'){ //required as it is not primarily a number
    decimalInput.value = '';
    binaryInput.value = '';
    octalInput.value = '';
    return;
  }
  if(!re.test(hexadecimalInput.value)) {
    alert("Error: Values permited must contain numbers from 0-9 or letters a-f");
    hexadecimalInput.value = hex.slice(0, -1);
    hexadecimalInput.focus();
  }
  var dec = parseInt(hex,16);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  decimalInput.value = dec;
  binaryInput.value = bin;
  octalInput.value = oct;
  decOld = dec;
  octOld = oct;
  binOld = bin;
}

function main(){
  decimalInput.addEventListener('input',decConvert);
  binaryInput.addEventListener('input',binConvert);
  octalInput.addEventListener('input',octConvert);
  hexadecimalInput.addEventListener('input',hexConvert);
}

main();
