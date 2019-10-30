const decimalQuestion = document.querySelector("decMatch.question");
const decimalAnswer = document.querySelector("decMatch.answer");
const binaryQuestion = document.querySelector("binMatch.question");
const binaryAnswer = document.querySelector("binMatch.answer");
const octalQuestion = document.querySelector("octMatch.question");
const octalAnswer = document.querySelector("octMatch.answer");
const hexadecimalQuestion = document.querySelector("hexMatch.question");
const hexadecimalAnswer = document.querySelector("hexMatch.answer");
var width = window.matchMedia("(max-width: 830px)")
var lastClick = '';
var lastWidth = '0';
var vertical = ['15%','25%','35%','45%','55%','65%','75%']
var horizontal = ['3%','9%','15%','21%','27%','33%','39%','45%','51%','57%','63%','69%','75%','81%']

function position(card){
  var vNum = Math.floor(Math.random() * (6));
  card.style.top=vertical[vNum];
  vertical.splice(vNum,1);
  var hNum = Math.floor(Math.random() * (10));
  card.style.left=horizontal[hNum];
  horizontal.splice(hNum,1);
  if(vertical.length==0){
     vertical = ['15%','25%','35%','45%','55%','65%','75%']
  }
  if(horizontal.length==0){
    horizontal = ['3%','9%','15%','21%','27%','33%','39%','45%','51%','57%','63%','69%','75%','81%']
  }
}

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
    lastClick = selection;
  } else{
    if (selection == lastClick){
      selection.style.backgroundColor = "";
    }else if (selection.tagName == lastClick.tagName){
      right(selection);
    }else{
      wrong(selection);
    }
    lastClick = '';
  }
}

function restart(method){
  if(reset.innerHTML=='Start'){
    reset.innerHTML='Reset';
    document.querySelector("p.instructions").style.top='91.5%';
    document.querySelector("p.instructions").style.left='20%';
    document.querySelector("p.instructions").style.fontSize='70%';
  }
  initialise(decimalQuestion,method);
  initialise(decimalAnswer,method);
  initialise(binaryQuestion,method);
  initialise(binaryAnswer,method);
  initialise(octalQuestion,method);
  initialise(octalAnswer,method);
  initialise(hexadecimalQuestion,method);
  initialise(hexadecimalAnswer,method);
  if(method == 'all'){
    lastClick = '';
  }
}

function initialise(card,method) {
  var mq = window.innerWidth;
  if (mq>=830) {
    card.style.display = 'inline-block';
    if (method == 'all'){
      card.style.backgroundColor = "";
      position(card);
    }else if(method == 'color' && card.style.backgroundColor == 'red'){
      card.style.backgroundColor = "";
    }
    if(method == 'all'){
      if (card.classList.contains('question')){
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
            card.innerHTML = parseFloat(decimalQuestion.innerHTML).toString(16);
          }
        }
      }
    }else {
      card.style.display='none';
    }
}

window.onresize = function(event) {
  var mq = window.innerWidth;
  if (mq>=830 & lastWidth<830) {
    restart('all');
    lastWidth = mq;
  }else if(mq<=830){
    restart('all');
    lastWidth = mq;
  }
};

function main(){
  decimalQuestion.onclick = function() {check(decimalQuestion)};
  decimalAnswer.onclick = function() {check(decimalAnswer)};
  binaryQuestion.onclick = function() {check(binaryQuestion)};
  binaryAnswer.onclick = function() {check(binaryAnswer)};
  octalQuestion.onclick = function() {check(octalQuestion)};
  octalAnswer.onclick = function() {check(octalAnswer)};
  hexadecimalQuestion.onclick = function() {check(hexadecimalQuestion)};
  hexadecimalAnswer.onclick = function() {check(hexadecimalAnswer)};

  reset.onclick = function() {restart('all')};
}

main();

function dropNav() {
  document.getElementById("navigation").classList.toggle("show");
  document.getElementById("navBtn").classList.toggle("changeColor");
}

window.onclick = function(event) {
  if (!event.target.matches('.navDrop')) {
    var dropdowns = document.getElementsByClassName("navLinks");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.querySelector("button.navDrop").style.backgroundColor = 'grey'
      }
    }
  }
}
