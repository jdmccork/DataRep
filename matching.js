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
  selection.style.backgroundColor = 'red';
  lastClick.style.backgroundColor = 'red';
}

function right(selection){
  selection.style.backgroundColor = 'green';
  lastClick.style.backgroundColor = 'green';
}

function check(selection){
  restart('color')
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

function restart(method){
  initialise(decimalQuestion,method)
  initialise(decimalAnswer,method)
  initialise(binaryQuestion,method)
  initialise(binaryAnswer,method)
  initialise(octalQuestion,method)
  initialise(octalAnswer,method)
  initialise(hexadecimalQuestion,method)
  initialise(hexadecimalAnswer,method)
  if(method == 'all'){
    lastClick = ''
  }
}

function initialise(card,method) {
  if (method == 'all'){
    card.style.backgroundColor = "";
  }else if(method == 'color' && card.style.backgroundColor != 'green' && card.style.backgroundColor != 'teal'){
    card.style.backgroundColor = "";
  }
  if(method == 'all'){
    if (card.id == 'question'){
      switch (card.tagName){
        case 'DECMATCH':
          card.innerHTML = Math.floor(Math.random() * 100 + 10);
          break;
        case 'BINMATCH':
          card.innerHTML = parseFloat(decimalQuestion.innerHTML).toString(2);
          break;
        case 'OCTMATCH':
          card.innerHTML = parseFloat(decimalQuestion.innerHTML).toString(8);
          break;
        case "HEXMATCH":
          card.innerHTML = parseFloat(decimalQuestion.innerHTML).toString(16)
        }
      }
    }
}

function main(){
  decimalQuestion.onclick = function() {check(decimalQuestion)};
  decimalAnswer.onclick = function() {check(decimalAnswer)};
  binaryQuestion.onclick = function() {check(binaryQuestion)};
  binaryAnswer.onclick = function() {check(binaryAnswer)};
  octalQuestion.onclick = function() {check(octalQuestion)};
  octalAnswer.onclick = function() {check(octalAnswer)};
  hexadecimalQuestion.onclick = function() {check(hexadecimalQuestion)};
  hexadecimalAnswer.onclick = function() {check(hexadecimalAnswer)};

  reset.onclick = function() {restart('all')}
}

main();
