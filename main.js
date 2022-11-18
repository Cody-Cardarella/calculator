
// Grabbibng all elements necessary
let buttons = document.querySelectorAll('button');
let previousOperand = document.querySelector('[data-previous-operand]');
let currentOperand = document.querySelector('[data-current-operand]');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');
let operand = document.querySelectorAll("button[data-type=operand]");
let operator = document.querySelectorAll("button[data-type=operator]");
let opPh = document.querySelector('.operatorPlaceholder');

// Clear the textboxes
clear.addEventListener('click', (e) => {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    opPh.textContent = '';
})

// Append numbers to the currentOperand HTML element
operand.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentOperand.textContent = currentOperand.textContent + '' + e.target.value;
    });
})

// Collect operand & operand and move them to the previous operand html element
operator.forEach((button) => {
  button.addEventListener('click', (e) => {
    previousOperand.textContent = currentOperand.textContent;
    opPh.textContent = e.target.value;
    currentOperand.textContent = '';

  })
})

// Calculate using (previousOperand) operator (currentOperand) 
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