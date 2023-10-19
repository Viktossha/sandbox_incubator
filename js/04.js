// Basic JavaScript freecodecamp

const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;

let myVar = 87;
myVar ++;

let myVar = 11;
myVar --;

const ourDecimal = 5.7;
let myDecimal = 1.2;

const product = 2.0 * 2.5;
const quotient = 4.4 / 2.0;

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

let myStr4 = "This is the first sentence.";
myStr4 += " This is the second sentence.";

const myName = "Vika";
const myStr = "My name is " + myName + " and I am well!";

const someAdjective = "hard, difficult, but interesting";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];

// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myArray = [50, 60, 70];
var myData = myArray[0];

const myArray = [18, 64, 99];
myArray[0] = 45;

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Setup
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Setup
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}

functionWithArgs(1, 2);
functionWithArgs(7,9);
function timesFive(num) {
    return num * 5;
}

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

function myLocalScope() {
    // Only change code below this line
    let myVar = 'test';

    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);