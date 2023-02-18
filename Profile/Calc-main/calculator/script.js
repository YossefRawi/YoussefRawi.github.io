const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll("[data-opertaion]");
const display = document.querySelector("[data-display]");
const Operationn = document.querySelectorAll("[data-operation]");
const allClear = document.querySelector("[data-all-clear]");
const dataDelete = document.querySelector("[data-delete]");
const operationEquals = document.querySelector("[data-equals]");

let firstNum = 0
let secondNum = 0
let operator = null;
let result = 0



dataDelete.addEventListener('click',() =>{
    if(display.textContent == operator) operator = null
    display.textContent = display.textContent.slice(0,-1);

})




allClear.addEventListener('click', function(){
  window.location.reload()
});

numberButtons.forEach((button) =>
    button.addEventListener("click",() =>{
    if(button.textContent === '.' && display.textContent.includes('.')) return
    if(display.textContent == '+' ||
      display.textContent == '-' ||
      display.textContent == '/' ||
      display.textContent == '*'){ 
        return display.textContent = '' }
    display.textContent += button.textContent

    

    if(operator != null) {
      secondNum = display.textContent
    }else{
      firstNum = display.textContent
    }
    console.log(firstNum)
    console.log(secondNum)
    console.log(operator)
    
    }))



Operationn.forEach((oButton) => 
    oButton.addEventListener("click", () => {
    if(!firstNum) return
    if(operator != null) return
    display.textContent = oButton.textContent
    operator = oButton.textContent
    }))



 operationEquals.addEventListener('click', 
 () => operate(firstNum,secondNum,operator) );








  







function operate(firstNum,secondNum,operator){
    if (operator == '+') return  add(firstNum,secondNum) ;
    if (operator == '-') return subtract(firstNum,secondNum);
    if (operator == "*") return multiply(firstNum,secondNum);
    if (operator == "/") return divide(firstNum,secondNum);
    console.log('Enter a Correct Operator');
}

function add(x,y){
  let xx = parseFloat(x)
  let yx = parseFloat(y)
  result = xx + yx;
  display.textContent = result;
  returnToNormal()

}
function subtract(x,y){
  result = x - y;
  display.textContent = result;
  returnToNormal()

}
function multiply(x,y){
  result = x * y;
  display.textContent = result;
  returnToNormal()
}
function divide(x,y){
  result = x / y;
  display.textContent = result;
  returnToNormal()
}

function returnToNormal(){
  firstNum = result
  secondNum = 0
  operator = null
  result = 0

  console.log(firstNum,secondNum,operator,result)
}