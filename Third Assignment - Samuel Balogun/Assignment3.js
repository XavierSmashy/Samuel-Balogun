// Section A: forEach()

// Question 1
const numbers1 = [2, 4, 6, 8, 10];
numbers1.forEach(num => console.log(num * 2));

// Question 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(name => console.log(`Hello ${name}!`));


// Section B: map()

// Question 3
const numbers3 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers3.map(num => num * num);
console.log(squaredNumbers);

// Question 4
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.90);
console.log(discountedPrices);


// Section C: filter()

// Question 5
const numbers5 = [5, 12, 8, 20, 3];
const greaterThanTen = numbers5.filter(num => num > 10);
console.log(greaterThanTen);

// Question 6
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter(age => age >= 18);
console.log(adults);


// Bonus Question

// Question 7
const numbers7 = [10, 15, 20, 25, 30];
const finalResult = numbers7
  .filter(num => num > 20)
  .map(num => num * 2);
console.log(finalResult);