    // if else statement

    let userAge = 21;
    if (userAge >= 18) {
        console.log("Welcome to Naija");
    } else {
        console.log("Sorry, you are not allowed to enter");
    }

    let myGender = "non-binary";

    if (myGender === "female") {
        console.log("welcome to the ladies section");
    } else if (myGender === "male") {   // Fix: Added parentheses here
        console.log("welcome to the males section");
    } else if (myGender === "other") {  // Fix: Added parentheses here
        console.log("welcome to the other section");
    } else {
        console.log("we don't know where you belong");
    }

    let username = "Samuel";
    let password = "password123";

    if (username === "Samuel" && password === "password123"){
        console.log("username and password is correct");
    } else {
        console.log("login failed");
    }

    let voterAge = 20;

    if (voterAge >= 18) {
        console.log("You are eligible to vote in the forthcoming election.");
    } else {
        console.log("Sorry, you must be 18 or older to vote.");}
