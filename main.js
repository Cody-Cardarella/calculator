// Define the variables
let buttons = document.querySelectorAll('button');
let previousOperand = document.querySelector('[data-previous-operand]');
let currentOperand = document.querySelector('[data-current-operand]');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');
let operand = document.querySelectorAll("button[data-type=operand]");
let operator = document.querySelectorAll("button[data-type=operator]");
let opPh = document.querySelector('.operatorPlaceholder');

// Clear the array on click
clear.addEventListener('click', (e) => {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    opPh.textContent = '';
})

// Add value to array and the screen
operand.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentOperand.textContent = currentOperand.textContent + '' + e.target.value;
    });
})

// Take operator and move to previous operand
operator.forEach((button) => {
  button.addEventListener('click', (e) => {
    previousOperand.textContent = currentOperand.textContent;
    opPh.textContent = e.target.value;
    currentOperand.textContent = '';

  })
})

// Calculate using the HTML of previous/current/operator elements
equals.addEventListener('click', (e) => {
let parsePrev = parseFloat(previousOperand.textContent);
let parseCur = parseFloat(currentOperand.textContent);

if (opPh.textContent === '+'){
  currentOperand.textContent = parsePrev + parseCur;
  previousOperand.textContent = '';
  opPh.textContent = '';
} else if (opPh.textContent === '-'){
  currentOperand.textContent = parsePrev - parseCur;
  previousOperand.textContent = '';
  opPh.textContent = '';
} else if (opPh.textContent === '/'){
  currentOperand.textContent = parsePrev / parseCur;
  previousOperand.textContent = '';
  opPh.textContent = '';
} else {
  currentOperand.textContent = parsePrev * parseCur;
  previousOperand.textContent = '';
  opPh.textContent = '';
}

})