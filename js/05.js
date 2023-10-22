// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    if (flower1 != null && flower2 != null) {
        return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
    }
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
    let string = ''
    for (var i = 1; i <= num; i++) {
        string += i + ' sheep...'
    }
    return string
}

//Complete the solution so that it reverses the string passed into it.
function solution(str) {
    let arr = str.split('')
    let reverseArr = arr.reverse()
    return reverseArr.join('')
}

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
//It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name) {

    let firstLetter = name.split(" ")[0][0].toUpperCase()
    let secondLetter = name.split(" ")[1][0].toUpperCase()
    return firstLetter + '.' + secondLetter
}

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
    let result = 1;
    if (x) {
        for (let i = 0; i < x.length; i++) {
            result *= x[i];
        }
    }
    return result;
}

//Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x) {
    let result = [];
    if (x) {
        for (let i = 0; i < x.length; i++) {
            result.push(x[i] * 2);
        }
    }
    return result;
}

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
function paperwork(n, m) {
    return (n > 0 && m > 0) ? n * m : 0;
}

//Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
    if (p1 === 'scissors' && p2 === 'paper') {
        return "Player 1 won!";
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return "Player 1 won!";
    } else if (p1 === 'paper' && p2 === 'rock') {
        return "Player 1 won!";
    } else if (p1 === p2) {
        return "Draw!";
    } else {
        return "Player 2 won!";
    }
};

//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    let countPositives = 0;
    let SumNegatives = 0;
    if (input == null || input.length === 0) {
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countPositives++;

        } else if (input[i] < 0) {
            SumNegatives += input[i];
        }
    }
    return [countPositives, SumNegatives]
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    let arr = Array.from(s);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '!') {
            delete arr[i]
        }
    }
    return arr.join('');
}

//Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
    let result = [n];
    for (let i = 1; i < n; i++) {
        result.push(n - i);
    }
    return result;
};

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
}

var summation = function (num) {
    let res = num;
    for (let i = 0; i < num; i++) {
        res += i;
    }
    return res;
}

//Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    const litersPerHour = 0.5;
    return Math.floor(time * litersPerHour);
}

//Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b) {
    return b === true ? 'true' : 'false';
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9
function squareSum(numbers) {
    let newArr = numbers.map((num) => Math.pow(num, 2));
    return newArr.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
}

function numberToString(num) {
    return String(num);
}

//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
function areYouPlayingBanjo(name) {
    let arr = Array.from(name);
    return arr[0] === 'R' || arr[0] === 'r' ? (name + ' plays banjo') : (name + ' does not play banjo');
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    return num > 0 ? -num : num
}

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
    return str.slice(1, -1);
};

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += s;
    }
    return res;
}

//есть метод String.prototype.repeat() :)
function repeatStr(n, s) {
    return s.repeat(n);
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return number > 0 ? -number : number * (-1);
}

//для глупых!!! решение проще, чем выше писала я
function opposite(number) {
    return (-number);
}

//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res += arr[i];
        }
    }
    return res;
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

//Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;
    }
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

function stringToArray(string) {

    return string.split(' ');

}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (6 >= month && month > 3) {
        return 2;
    } else if (9 >= month && month > 6) {
        return 3;
    } else if (12 >= month && month > 9) {
        return 4;
    }
}

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

//Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(array) {
    let sum = array.reduce(function (sum, elem) {
        return sum + elem;
    }, 0)
    return array.length === 0 ? 0 : sum / array.length;
}

function enough(cap, on, wait) {
    return cap/(on+wait) === 1 ? 0 : on - wait;
}