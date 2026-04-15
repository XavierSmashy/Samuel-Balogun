// Task 1: Create Variables for the Bookstore Order

// We use 'const' for details that shouldn't change during this specific transaction
const customerName = "David Olayinka"; 
const bookTitle = "JavaScript for Beginners";
const bookPrice = 4500;   // Number (Price in Naira)
const isStudent = true;   // Boolean (Yes, he is a student)

// We use 'let' for details that might update (like adding more books to the cart)
let customerAge = 24;
let quantity = 2;

// Bonus: Calculating the total price!
// We use the asterisk (*) to multiply the price by the number of books
let totalPrice = bookPrice * quantity;

// --- PRINTING THE ORDER RECEIPT ---
console.log("=== BOOKSTORE RECEIPT ===");
console.log("Customer:", customerName);
console.log("Age:", customerAge);
console.log("Student Status:", isStudent);
console.log("Book Title:", bookTitle);
console.log("Price per book:", bookPrice);
console.log("Quantity:", quantity);
console.log("-------------------------");
console.log("TOTAL DUE:", totalPrice);