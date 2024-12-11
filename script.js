// ****************CHAP 26-30********************

// ________________MATH METHOD______________

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//Answer-----------------

let userNum = parseFloat(prompt("Enter a positive integer number"));
let roundNum = Math.round(userNum);
let floorValue = Math.floor(userNum);
let ceilValue = Math.ceil(userNum);

document.write(`<h1>Positive Integer Number Operations </h1>`);
document.write(`<b>Number: ${userNum} <br/> </b>`);
document.write(`<b>Round Off Value: ${roundNum} <br/> </b>`);
document.write(`<b>Floor Value: ${floorValue} <br/> </b>`);
document.write(`<b>Ceil Value: ${ceilValue} <br/> </b>`);
// ---------------------------------------------------------------------------------------------------------
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//Answer-----------------

let negativeNum = parseFloat(prompt("Enter a negative floating-point number:"));
let roundedValue = Math.round(negativeNum);
let flooredValue = Math.floor(negativeNum);
let ceiledValue = Math.ceil(negativeNum);

document.write(`<h1>Negative Floating Point Number Operations</h1>`);
document.write(`<b>Number: ${negativeNum} <br/> </b>`);
document.write(`<b>Round Off Value: ${roundedValue} <br/> </b>`);
document.write(`<b>Floor Value: ${flooredValue} <br/> </b>`);
document.write(`<b>Ceil Value: ${ceiledValue} <br/> </b>`);

// ---------------------------------------------------------------------------------------------------------

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Answer------------

let user = parseFloat(prompt("Enter a number:"));
let absoluteValue = Math.abs(user);

document.write(`<h1>Absolute Value Calculation</h1>`);
document.write(`<b>Absolute value of ${user} is ${absoluteValue}.</b>`);
// ---------------------------------------------------------------------------------------------------------

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Answer------------

let diceValue = Math.floor(Math.random() * 6) + 1;

document.write(`<h1>Dice Roll Simulation</h1>`);
document.write(`<b>You rolled a dice and got: ${diceValue}</b>`);

// ---------------------------------------------------------------------------------------------------------

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Answer------------

let coinValue = Math.floor(Math.random() * 2);

let result = coinValue === 0 ? "Heads" : "Tails";

document.write(`<h1>Coin Toss Simulation</h1>`);
document.write(`<b>You tossed a coin and got: ${result}</b>`);

// ---------------------------------------------------------------------------------------------------------
// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// Answer------------

let randomNum = Math.floor(Math.random() * 100) + 1;

document.write(`<h1>Random Number</h1>`);
document.write(`<b>Random number between 1 to 100: ${randomNum}</b>`);


// ---------------------------------------------------------------------------------------------------------

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// Answer------------

let userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
let weightMatch = userInput.match(/(\d+(\.\d+)?)/);

if (weightMatch) {
    let weight = parseFloat(weightMatch[0]);
    document.write(`<h1>User Weight</h1>`);
    document.write(`<b>Your weight is: ${weight} kg</b>`);
} else {
    document.write(`<h1>Error</h1>`);
    document.write(`<b>Invalid input. Please enter a valid weight.</b>`);
}

// --------------------------------------------------------------------------------------------------

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Answer------------

let secretNum = Math.floor(Math.random() * 10) + 1;
let userChoice = parseInt(prompt("Guess the Secret Number Between 1 to 10"));

document.write(`<h1>Guess the Secret Number</h1>`);
if (userChoice === secretNum) {
    document.write(`<b>Congratulations! Your guess is Right: ${secretNum} <br/></b>`);
} else {
    document.write(`<b>Your Guess is Wrong. The secret number was: ${secretNum} <br/></b>`);
}

// ----------------------- THE END---------------------------------------------
