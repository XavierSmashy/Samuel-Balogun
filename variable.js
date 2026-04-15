var myName = "Esther"
// console.log(myName)
let myAge = 30
const myHeight = 5.4

//var , you use it when the value can change and you want to reassign it later in the code.
var myName = "John"
console.log(myName)

// let myAge = 25
// console.log(myAge)

// const myHeight = 5.6
// console.log(myHeight)


//variable assignment
myName = "Adina"
console.log(myName)

myAge = 31
console.log(myAge)

// myHeight = 5.5
// console.log(myHeight)

//DATATYPES : Primitive and Non-Primitive Data Types

//Primitive Data Types: String, Number, Boolean, Null, Undefined
let myString = "Hello, World!"
let myNumber = 42
let myBoolean = true
console.log(myString)
console.log(myNumber)
console.log(myBoolean)

//Non-Primitive Data Types: Object, Array, Function
let myObject = { name: "John", age: 30 , isStudent: true }
let myArray = ["Rice" , "Beans", "Yam" , 2 , true , 30 , ["John", "Jane"]]

// --- PRINTING THE ENTIRE DATA STRUCTURES ---
console.log("=== FULL OBJECT ===");
console.log(myObject);

console.log("\n=== FULL ARRAY ==="); // The \n just adds a blank line in the terminal for readability
console.log(myArray);

// --- PRINTING SPECIFIC PIECES OF DATA ---
console.log("\n=== SPECIFIC PIECES ===");

// To get something out of an object, use a dot (.)
console.log("Just the name from the object:", myObject.name);

// To get something out of an array, use its index number (counting starts at 0!)
console.log("The first item in the array:", myArray[0]); 
console.log("The third item in the array:", myArray[2]);

// Bonus: Getting a piece of data out of the array INSIDE your array
console.log("The first name in the nested array:", myArray[6][0]);