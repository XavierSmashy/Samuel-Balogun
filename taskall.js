// --- TASK 1: CREATE VARIABLES ---
const customerName = "David Olayinka"; 
let customerAge = 24;
const bookTitle = "JavaScript for Beginners";
const bookPrice = 4500;   
let quantity = 5;         
const isStudent = true;   

// --- TASK 2: USE ARITHMETIC OPERATORS ---
let totalPrice = bookPrice * quantity;

// --- PRINTING THE RESULTS ---
console.log("Customer:", customerName);
console.log("Buying:", quantity, "copies of", bookTitle);
console.log("Total Cost: ₦" + totalPrice);

// Task 3: Use Comparison Operators

// 1. Check if the customer is 18 years or older (>= means "greater than or equal to")
let isAdult = customerAge >= 18;

// 2. Check if the quantity of books is more than 3 (> means "strictly greater than")
let buyingManyBooks = quantity > 3;

// 3. Check if the book price is equal to 5000 (=== means "is exactly equal to")
let isBookFiveThousand = bookPrice === 5000;

// --- PRINTING THE RESULTS ---
console.log("=== BOOKSTORE ORDER ===");
console.log("Customer:", customerName);
console.log("Total Cost: ₦" + totalPrice);
console.log("-------------------------");
console.log("Is the customer an adult?", isAdult);
console.log("Are they buying more than 3 books?", buyingManyBooks);
console.log("Is the book exactly ₦5000?", isBookFiveThousand);

// --- TASK 4: USE A NON-PRIMITIVE DATA TYPE (OBJECT) ---
const customerOrder = {
    customerName: customerName,
    bookTitle: bookTitle,
    quantity: quantity,
    totalPrice: totalPrice
};

// --- PRINTING THE FINAL OBJECT ---
console.log("=== FINAL CUSTOMER ORDER ===");
console.log(customerOrder);