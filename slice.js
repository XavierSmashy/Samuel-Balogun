const str = "coding is fun";

let word1 = str.substring(0, 6);
console.log(word1);

let word2 = str.slice(10);
console.log(word2);

let word3 = str.slice(7, 9);
console.log(word3);

// Task 1
const colors = "red,green,blue";

let colorsArray = colors.split(",");
console.log(colorsArray);

let joinedColors = colorsArray.join("-");
console.log(joinedColors);

// Task 2
const url = "/api/v1/users";

let slash = url.split("/");
console.log(slash);

let getV1 = slash[2];
console.log(getV1);

const email = "test@school.edu";

// 1. Get username ('test') using split()
let username = email.split("@")[0];
console.log(username);

// 2. Check if it's a '.edu' domain using endsWith()
let isEdu = email.endsWith(".edu");
console.log(isEdu);

// 3. Replace '@' with 'AT' using replace()
let replacedEmail = email.replace("@", "AT");
console.log(replacedEmail);