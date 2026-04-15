// 1. Substring & Slice
const str = "Nigeria is awesome";

let extractedNigeria = str.substring(0, 7);
console.log(extractedNigeria);

let extractedAwesome = str.slice(11);
console.log(extractedAwesome);

let extractedIs = str.slice(8, 10);
console.log(extractedIs);


// 2. Split
const names = "John,Jane,Doe";

let namesArray = names.split(",");
console.log(namesArray);

let joinedNames = namesArray.join(" ");
console.log(joinedNames);

const path = "/user/home/docs";

let pathArray = path.split("/");
console.log(pathArray);

let getHome = pathArray[2];
console.log(getHome);


// 3. Mix
const email = "user@example.com";

let emailUsername = email.split("@")[0];
console.log(emailUsername);

let isComDomain = email.endsWith(".com");
console.log(isComDomain);

let emailReplaced = email.replace("@", "AT");
console.log(emailReplaced);