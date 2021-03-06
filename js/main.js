
var winCount = 0;
var lossCount = 0;
var drawCount = 0;

document.getElementById("rockBtn").addEventListener("click", startGame('rock'));
document.getElementById("paperBtn").addEventListener("click", startGame('paper'));
document.getElementById("scissorsBtn").addEventListener("click", startGame('scissors'));

function replaceButton() {
  var element = document.getElementById("strtBtn");
  element.parentNode.removeChild(element);
  addElement('buttons', 'button', 'rockBtn', "Rock");
  addElement('buttons', 'button', 'paperBtn', "Paper");
  addElement('buttons', 'button', 'scissorsBtn', "Scissors");
}

function addElement(parentId, elementTag, elementId, text) {
  // Adds an element to the document
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.innerHTML = text;
  p.appendChild(newElement);
}

function computerInput() {
  computerInput = 'rock'
  return computerInput
}

function startGame (userInput) {
  var uInput = userInput;
  var cInput = computerInput();
  
  switch (uInput, cInput) {
    
// User Picks Rock
    case 'rock', 'rock':
    updateHistory(0);
    break;

    case 'rock', 'paper':
    updateHistory(-1);
    winChoice('paper');
    break;

    case 'rock', 'scissors':
    updateHistory(1);
    winChoice('rock');
    break;

// User Picks Paper
    case 'paper', 'rock':
    updateHistory(1);
    winChoice('paper');
    break;

    case 'paper', 'paper':
    updateHistory(0);
    break;

    case 'paper', 'scissors':
    updateHistory(-1);
    winChoice('scissors');
    break;

// User Picks Scissors
    case 'scissors', 'rock':
    updateHistory(-1);
    winChoice('rock');
    break;

    case 'scissors', 'paper':
    updateHistory(1);
    winChoice('scissors');
    break;

    case 'scissors', 'scissors':
    updateHistory(0);
    break;

// Error    
    default:
    result = 2;
  }
}

function updateHistory(historyUpdate) {
 if (historyUpdate == 1){
   winCount = winCount + 1;
  // replace history win text with added winCount
  $("#winCount").append(winCount);
 } else if (historyUpdate == 0){
   drawCount = drawCount + 1;
  // replace history draw text with added drawCount
  $("#drawCount").append(drawCount);
 } else if (historyUpdate == -1){
  lossCount = lossCount + 1;
  // replace history loss text with added lossCount
  $("#lossCount").append(lossCount);
 } else {
   // Some error message
 }
  
}

function winChoice(winChoice) {

   switch (winChoice){
     case 'rock':
     // add 1 to winChoiceRock
     break
     case 'paper':
     // add 1 to winChoicePaper
     break
     case 'scissors':
     // add 1 to winChoiceScissors
     break
     default:
   }
}



{/* 
<div id="buttons">          
  <button id="rockBtn">Rock</button>
  <button id="paperBtn">Paper</button>
  <button id="scissorsBtn">Scissors</button>
</div> 
*/}