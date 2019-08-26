const decimalInput = document.querySelector("#decimal > input");
const binaryInput = document.querySelector("#binary > input");
const octalInput = document.querySelector("#octal > input");
const hexadecimalInput = document.querySelector("#hexadecimal > input");
var binOld = ''
var octOld = ''
var hexOld = ''

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
}

function binConvert(){
  if (binaryInput.value==''){
    deciamlInput.value = '';
    octalInput.value = '';
    hexadecimalInput.value = '';
    return;
  }
  while(binaryInput.value.includes("2") || binaryInput.value.includes("9")) {
    if(binaryInput.value==binOld+1) {
      while(binaryInput.value.includes("2") || binaryInput.value.includes("9")){
        if (octalInput.value<0){
          binaryInput.value=parseInt(binaryInput.value)+8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('9')+1))
        }else{
        binaryInput.value=parseInt(binaryInput.value)+8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('2')+1))
        }
      }
    } else if(binaryInput.value==binOld-1) {
      while(binaryInput.value.includes("2") || binaryInput.value.includes("9")){
        if(octalInput.value<0){
          binaryInput.value=parseInt(binaryInput.value)-8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('2')+1))
        }else{
          binaryInput.value=parseInt(binaryInput.value)-8*Math.pow(10,binaryInput.value.length-(binaryInput.value.indexOf('9')+1)) //2*position of incorrect value 10^position
        }
      }
    }else {
      alert("Error: Binary inputs can only contain 1 or 0");
      binaryInput.value = bin;
      binaryInput.focus();
      decimalInput.value = '';
      octalInput.value = '';
      hexadecimalInput.value = '';
      return false;
    }
  }
  var bin = parseFloat(binaryInput.value);
  var dec = parseInt(bin,2);
  var oct = dec.toString(8);
  var hex = dec.toString(16);
  decimalInput.value = dec;
  octalInput.value = oct;
  hexadecimalInput.value = hex;
  binOld=bin
}


function octConvert(){
  if (octalInput.value==''){
    decimalInput.value = '';
    binaryInput.value = '';
    hexadecimalInput.value = '';
    return;
  }
  while(octalInput.value.includes("8") || octalInput.value.includes("9")) {
    if(octalInput.value==octOld+1) {
      while(octalInput.value.includes("8") || octalInput.value.includes("9")){
        if (octalInput.value<0){
          octalInput.value=parseInt(octalInput.value)+2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('9')+1))
        }else{
        octalInput.value=parseInt(octalInput.value)+2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('8')+1))
        }
      }
    } else if(octalInput.value==octOld-1) {
      while(octalInput.value.includes("8") || octalInput.value.includes("9")){
        if(octalInput.value<0){
          octalInput.value=parseInt(octalInput.value)-2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('8')+1))
        }else{
          octalInput.value=parseInt(octalInput.value)-2*Math.pow(10,octalInput.value.length-(octalInput.value.indexOf('9')+1)) //2*position of incorrect value 10^position
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
  octOld = oct
}

function hexConvert(){
  var hex = hexadecimalInput.value;
  var re = /-?[0-9a-fA-F]+$/;
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
}

function main(){
  decimalInput.addEventListener('input',decConvert);
  binaryInput.addEventListener('input',binConvert);
  octalInput.addEventListener('input',octConvert);
  hexadecimalInput.addEventListener('input',hexConvert);
}

//var testog="9281"
//if(testog.some(["5","4","2"])){
//  console.log('yes')
//}
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
