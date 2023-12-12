// Basic JavaScript freecodecamp

const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;

let myVar = 87;
myVar++;

let myVar = 11;
myVar--;

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
functionWithArgs(7, 9);

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

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = 'sweater';
    // Only change code above this line
    return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);

    return arr.shift();
    ;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';

}

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}

testElse(4);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else if (num >= 20) {
        return 'Huge';
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;

    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}


//In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
//
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
//
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
//
// Example Outputs: -3 Hold or 5 Bet
//
// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.
let count = 0;
function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + ' Bet';
    } else if (count <= 0) {
        return count + ' Hold';
    }

    return "Change Me";
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return 'Not Found'
    }
    // Only change code above this line
}

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    }

    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    }

    if (prop === 'tracks' && value !== '') {
        if (!records[id].hasOwnProperty('tracks')) {
            records[id][prop] = [];
        }
        records[id][prop].push(value);
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

const myArray = [];
let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

const myArray = [];
for (let i = 1; i < 10; i += 2 ) {
    myArray.push(i);
}

[1,3,5,7,9]