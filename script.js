// JavaScript Basics - Interactive Examples

// Global variables
let clickCount = 0;
let generatedNumbers = [];
let backgroundColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
];
let currentColorIndex = 0;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded successfully!');
    document.body.classList.add('color-transition');
});

// Toggle code visibility
function toggleCode(codeId) {
    const codeBlock = document.getElementById(codeId);
    const button = event.target;
    
    if (codeBlock.classList.contains('hidden')) {
        codeBlock.classList.remove('hidden');
        button.textContent = 'Hide Code';
        codeBlock.style.opacity = '0';
        codeBlock.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            codeBlock.style.transition = 'all 0.3s ease';
            codeBlock.style.opacity = '1';
            codeBlock.style.transform = 'translateY(0)';
        }, 10);
    } else {
        codeBlock.style.transition = 'all 0.3s ease';
        codeBlock.style.opacity = '0';
        codeBlock.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            codeBlock.classList.add('hidden');
            button.textContent = 'Show Code';
        }, 300);
    }
}

// Variables & Data Types Example
function greetUser() {
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    
    const name = nameInput.value.trim();
    
    if (name === '') {
        greeting.textContent = 'Please enter your name!';
        greeting.style.color = '#e74c3c';
        return;
    }
    
    const greetingMessage = `Hello, ${name}! Welcome to JavaScript learning!`;
    greeting.textContent = greetingMessage;
    greeting.style.color = '#27ae60';
    
    // Clear input after greeting
    nameInput.value = '';
}

// Functions & Calculations Example
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const result = document.getElementById('result');
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers!';
        result.style.color = '#e74c3c';
        return;
    }
    
    let calculationResult;
    let operationSymbol;
    
    switch (operation) {
        case 'add':
            calculationResult = num1 + num2;
            operationSymbol = '+';
            break;
        case 'subtract':
            calculationResult = num1 - num2;
            operationSymbol = '-';
            break;
        case 'multiply':
            calculationResult = num1 * num2;
            operationSymbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                result.textContent = 'Cannot divide by zero!';
                result.style.color = '#e74c3c';
                return;
            }
            calculationResult = num1 / num2;
            operationSymbol = '÷';
            break;
        default:
            result.textContent = 'Invalid operation!';
            result.style.color = '#e74c3c';
            return;
    }
    
    result.textContent = `${num1} ${operationSymbol} ${num2} = ${calculationResult}`;
    result.style.color = '#27ae60';
}

// Event Handling Examples
function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    document.body.style.background = backgroundColors[currentColorIndex];
    
    console.log(`Background changed to color ${currentColorIndex + 1}`);
}

function showAlert() {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Hello from JavaScript! Current time: ${currentTime}`);
}

function incrementCounter() {
    clickCount++;
    document.getElementById('count').textContent = clickCount;
    
    // Add some visual feedback
    const countElement = document.getElementById('count');
    countElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countElement.style.transform = 'scale(1)';
    }, 200);
}

function resetCounter() {
    clickCount = 0;
    document.getElementById('count').textContent = clickCount;
    console.log('Counter reset to 0');
}

// DOM Manipulation Examples
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <button onclick="removeTodo(this)" style="background: #e74c3c; padding: 0.5rem; margin-left: 1rem;">Remove</button>
    `;
    
    // Add animation
    li.style.opacity = '0';
    li.style.transform = 'translateX(-20px)';
    todoList.appendChild(li);
    
    // Animate in
    setTimeout(() => {
        li.style.transition = 'all 0.3s ease';
        li.style.opacity = '1';
        li.style.transform = 'translateX(0)';
    }, 10);
    
    // Clear input
    todoInput.value = '';
    
    console.log(`Added todo: ${todoText}`);
}

function removeTodo(button) {
    const li = button.parentElement;
    li.style.transition = 'all 0.3s ease';
    li.style.opacity = '0';
    li.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        li.remove();
    }, 300);
}

function clearTodos() {
    const todoList = document.getElementById('todoList');
    const todos = todoList.querySelectorAll('li');
    
    if (todos.length === 0) {
        alert('No tasks to clear!');
        return;
    }
    
    if (confirm('Are you sure you want to clear all tasks?')) {
        todos.forEach((todo, index) => {
            setTimeout(() => {
                todo.style.transition = 'all 0.3s ease';
                todo.style.opacity = '0';
                todo.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    todo.remove();
                }, 300);
            }, index * 100);
        });
        
        console.log('All todos cleared');
    }
}

// Arrays & Loops Examples
function generateNumbers() {
    generatedNumbers = [];
    const numbersContainer = document.getElementById('numbersList');
    
    // Generate 10 random numbers
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        generatedNumbers.push(randomNumber);
    }
    
    displayNumbers();
    console.log('Generated numbers:', generatedNumbers);
}

function displayNumbers() {
    const numbersContainer = document.getElementById('numbersList');
    numbersContainer.innerHTML = '';
    
    if (generatedNumbers.length === 0) {
        numbersContainer.innerHTML = '<p>No numbers generated yet. Click "Generate Random Numbers" to start!</p>';
        return;
    }
    
    generatedNumbers.forEach((number, index) => {
        const numberElement = document.createElement('span');
        numberElement.className = 'number-item';
        numberElement.textContent = number;
        
        // Add staggered animation
        numberElement.style.opacity = '0';
        numberElement.style.transform = 'translateY(20px)';
        numbersContainer.appendChild(numberElement);
        
        setTimeout(() => {
            numberElement.style.transition = 'all 0.3s ease';
            numberElement.style.opacity = '1';
            numberElement.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function sortNumbers() {
    if (generatedNumbers.length === 0) {
        alert('Generate some numbers first!');
        return;
    }
    
    // Sort the array
    generatedNumbers.sort((a, b) => a - b);
    displayNumbers();
    
    console.log('Numbers sorted:', generatedNumbers);
}

// Additional utility functions
function addEnterKeyListeners() {
    // Add Enter key functionality to inputs
    document.getElementById('nameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            greetUser();
        }
    });
    
    document.getElementById('todoInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // Add Enter key to calculator inputs
    ['num1', 'num2'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculate();
            }
        });
    });
}

// Initialize enter key listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', addEnterKeyListeners);

// Console welcome message
console.log(`
🎉 Welcome to JavaScript Basics!
📚 This interactive website demonstrates:
   • Variables and data types
   • Functions and calculations  
   • Event handling
   • DOM manipulation
   • Arrays and loops

💡 Open the browser console to see additional logs and try some JavaScript commands!

Example commands to try:
- changeColor()
- incrementCounter()
- generateNumbers()
- console.log('Hello from the console!')
`);

// Export functions for potential use in other scripts
window.JSBasics = {
    greetUser,
    calculate,
    changeColor,
    showAlert,
    incrementCounter,
    resetCounter,
    addTodo,
    clearTodos,
    generateNumbers,
    sortNumbers
};
