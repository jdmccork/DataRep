const decimalQuestion = document.querySelector("decMatch#question");
const decimalAnswer = document.querySelector("decMatch#answer");
const binaryQuestion = document.querySelector("binMatch#question");
const binaryAnswer = document.querySelector("binMatch#answer");
const octalQuestion = document.querySelector("octMatch#question");
const octalAnswer = document.querySelector("octMatch#answer");
const hexadecimalQuestion = document.querySelector("hexMatch#question");
const hexadecimalAnswer = document.querySelector("hexMatch#answer");
const reset = document.querySelector("reset")
var lastClick = '';

function wrong(selection){
  console.log('test complete')
  selection.style.backgroundColor = 'red';
  lastClick.style.backgroundColor = 'red';
}

function right(selection){
  selection.style.backgroundColor = 'green';
  lastClick.style.backgroundColor = 'green';
}

function check(selection){
  if (selection.style.backgroundColor == 'green'){
    return;
  }
  if (lastClick == '') {
    switch(selection.style.backgroundColor){
      case '':
        selection.style.backgroundColor = "teal";
        break;
      case 'teal':
        selection.style.backgroundColor = "";
        break;
    }
    lastClick = selection
  } else{
    if (selection == lastClick){
      selection.style.backgroundColor = "";
    }else if (selection.tagName == lastClick.tagName){
      right(selection);
    }else{
      wrong(selection);
    }
    lastClick = ''
  }
}

function restart(){
  initialise(decimalQuestion)
  initialise(decimalAnswer)
  initialise(binaryQuestion)
  initialise(binaryAnswer)
  initialise(octalQuestion)
  initialise(octalAnswer)
  initialise(hexadecimalQuestion)
  initialise(hexadecimalAnswer)
  console.log('reset')
}

function initialise(card) {
  card.style.backgroundColor = "";
  console.log(card.innerHTML);
  if (card.id == 'question'){
    switch (card.tagName){
      case 'DECMATCH':
        card.innerHTML = Math.floor(Math.random() * 100 + 10)
        break;
      case 'BINMATCH':
        card.innerHTML = parseFloat(decimalQuestion.innerHTML).toString(2)
      }
  }

}

function main(){
  decimalQuestion.onclick = function() {check(decimalQuestion)};
  decimalAnswer.onclick = function() {check(decimalAnswer)};
  binaryQuestion.onclick = function() {check(binaryQuestion)};
  binaryAnswer.onclick = function() {check(binaryAnswer)}

  reset.onclick = function() {restart()}
}

main();
