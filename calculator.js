// This brings in Node's built-in tool for reading terminal inputs
const readline = require('readline');

const calculator = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("========================================");
console.log("   NODE.JS SCIENTIFIC CALCULATOR");
console.log("========================================");
console.log("Type a math problem (e.g., 5 + 5, Math.sqrt(16), Math.PI * 2)");
console.log("Type 'exit' to close the calculator.\n");

// We create a function that asks the user for input
function calculateNext() {
  calculator.question('Enter equation: ', function(userInput) {
    
    // Check if the user wants to quit
    if (userInput.toLowerCase() === 'exit') {
      console.log("Calculator closed. Goodbye!");
      calculator.close();
      return; // Stops the function
    }

    try {
      // eval() tells JavaScript to treat the text like real math
      let answer = eval(userInput);
      console.log("Result: " + answer + "\n");
    } catch (error) {
      console.log("Error: That didn't look like a valid math equation.\n");
    }

    // Call the function again so it loops forever until they type 'exit'
    calculateNext(); 
  });
}

// Start the loop!
calculateNext();