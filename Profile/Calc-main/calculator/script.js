const numberButtons = document.querySelectorAll('[data-number]');
const operaButtons = document.querySelectorAll("[data-opertaion]");
const display = document.querySelector("[data-display]");
const Operationn = document.querySelectorAll("[data-operation]");
const allClear = document.querySelector("[data-all-clear]");
const dataDelete = document.querySelector("[data-delete]");
const dataEqual = document.querySelector("[data-equals]");

let firstNum = '' ;
let secondNum = '';
let operator = null;
let result = '';




dataEqual.addEventListener('click', () => operate(firstNum,secondNum,operator));

allClear.addEventListener('click', function(){
  display.textContent = '',
  firstNum = '',
  secondNum = '',
  operator = null,
  result = '';
});

dataDelete.addEventListener("click", clearAll);






function clearAll(){
  let String = display.innerText.toString();
  display.innerText = String.substr(0, String.length -1);
  firstNum = display.innerText
  console.log(firstNum)
  
}



function btnPressed(){
  numberButtons.forEach((button) =>
    button.addEventListener("click",() =>{

    if(display.textContent === operator) clearAll();
    if(button.textContent === "." && display.textContent.includes(".")) return;
    (display.textContent += button.textContent)
    if (operator == null) {
      // Read first number if no operator set yet
      firstNum += button.textContent;
      console.log("firstnom", firstNum);
    } else {
      // Read second number
      
      secondNum += button.textContent;
      console.log("secondnom", secondNum);
    }
    }));
    
    Operationn.forEach((button) =>
      button.addEventListener("click",() => {
        if (operator == null){
          display.textContent = "";
          display.textContent += button.textContent;
          operator = button.textContent;
          console.log(operator);
        } return;
        }));

}

btnPressed();






function operate(firstNum,secondNum,operator){
    if (operator === '+') return  add(firstNum,secondNum) ;
    if (operator === '-') return subtract(firstNum,secondNum);
    if (operator === "*") return multiply(firstNum,secondNum);
    if (operator === "/") return divide(firstNum,secondNum);
    return console.log('Enter a Correct Operator');
}

function add(x,y){
  let xx = parseFloat(x)
  let yx = parseFloat(y)
  result = xx + yx;
  return display.textContent = result;

}
function subtract(x,y){
  result = x - y;
  return (display.textContent = result);

}
function multiply(x,y){
  result = x * y;
  return (display.textContent = result);
}
function divide(x,y){
  result = x / y;

  return (display.textContent = result);
}