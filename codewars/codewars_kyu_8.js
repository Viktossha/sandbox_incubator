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


//The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
function enough(cap, on, wait) {
    return cap - (on + wait) > 0 ? 0 : Math.abs(cap - (on + wait));
}

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
    "use strict";
    return numbers.reduce(function (sum, elem) {
        return sum + elem;
    }, 0)
}


//This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
function checkForFactor(base, factor) {
    return base % factor === 0;
}

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
    return Math.floor((s * 100000) / 3600);
}

//Task
// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
String.prototype.isUpperCase = function () {
    return this === this.toUpperCase();
}

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
    return a.includes(x);
}

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump
};

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let arr = str.split('');
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i] + arr[i]
    }
    return newStr;
}

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let arr = n.toString().split('').map(Number);
    return arr.reverse()
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let sum;
    if (d > 6) {
        sum = d * 40 - 50
    } else if (d > 2 && d < 7) {
        sum = d * 40 - 20
    } else if (d < 3) {
        sum = d * 40
    }
    return sum
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i])
            return arr[i];
    }
    return null;
}

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

// Vika, [10.12.2023 21:01]
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// Vika, [10.12.2023 21:01]
function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

// I have a cat and a dog.
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0
    let dogYears = 0

    if (humanYears === 1) {
        catYears = dogYears = 15;
    } else if (humanYears === 2) {
        catYears = dogYears = 24;
    } else if (humanYears > 2) {
        catYears = 4 * (humanYears - 2) + 24;
        dogYears = 5 * (humanYears - 2) + 24
    }

    return [humanYears, catYears, dogYears];
}

function hoopCount(n) {
    return n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
function fakeBin(x) {
    let arr = Array.from(x);
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        arr[i] > 4 ? newArr.push(1) : newArr.push(0);
    }

    return newArr.join('');
}

// This function should return a number (final grade). There are four types of final grades:
//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString) {
    return Number(inputString.split(' ')[0])
}

// In this Kata we are passing a number (n) into a function.
//Your code will determine if the number passed is even (or not).
//The function needs to return either a true or false.
//Numbers may be positive or negative, integers or floats.
//Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
    return n % 2 === 0
}

//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.
//
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (array == null || array.length < 2) {
        return 0
    }

    let sortArr = array.sort(function (a, b) {
        return a - b
    })

    let sum = 0
    for (let i = 1; i < sortArr.length - 1; i++) {
        sum += sortArr[i]
    }

    return sum
}

//Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"

function bmi(weight, height) {
    let bmi = weight / (height ** 2)

    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30.0) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return `found the needle at position ${i}`
        }
    }

    //проще
    //return `found the needle at position ${haystack.indexOf('needle')}`;
}

//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
    let newA = a.reduce(function (a, b) {
        return a * b;
    });

    let newB = b.reduce(function (a, b) {
        return a * b;
    });

    return Math.abs(newA - newB)
}

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//
// Example:
// move(3, 6) should equal 15

function move(position, roll) {
    return position + roll * 2
}

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
    let res = []
    for (let i = 0; i <= n; i++) {
        res[i] = Math.pow(2, i)
    }

    return res
}

//Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
    return 'pizza'.length
}

//Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {

    let str = x.toLowerCase()

    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }

    return true
}

//Предыдущая задача проще

const isPalindrome2 = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

//Задача : учитывая непустой массив целых чисел nums = [1, 2, 1, 2, 4], каждый элемент повторяется дважды, кроме одного. Нужно найти этот единственный элемент используя циклы.
function onlyOnceNum (nums) {

    let sortArr = nums.sort()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]  && nums[i] !== nums[i - 1]) {
            return nums[i]
        }
    }
}

//For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    let res = []

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            res[i] = 'U'
        } else {
            res[i] = dna[i]
        }
    }
    return res.join('')
}

function DNAtoRNA2(dna) {
    return dna.replace(/T/g, 'U');
}

//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

function strCount(str, letter){
    return str.split('').filter(l => l === letter).length
}

var capitals = function (word) {
    let res = []
    for (let i = 0; i < word.length; i++) {

        if (word[i] === word.toUpperCase()[i]) {
            res[i] = i
        }
    }

    return res.filter(el => el != null)
};

function sayHello(name) {
    return `Hello, ${name}`
}

//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
    let res = []
    let num = integer
    while (num <= limit) {
        res.push(num)
        num += integer
    }
    return res
}

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

function hero(bullets, dragons){
    return (bullets/dragons) >= 2
}

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

function plural(n) {
    return n !== 1
}

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

//Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    let arrNumbers = [
        a * (b + c),
        a * b * c,
        a + b * c,
        (a + b) * c,
        a + b + c,
        a * b + c
    ]

    return Math.max(...arrNumbers)
}

//Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
//
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
//
// The pipes are correct when each pipe after the first is 1 more than the previous one.
//
// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
//
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let res = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        res.push(i)
    }
    return res
}

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function(l , w) {
    return l === w ? (l * w) : 2 * (l + w)
};

//We need a function that can transform a string into a number. What ways of achieving this do you know?
const stringToNumber = function(str){

    let num = Number(str)

    let num2 = +str //унарный оператор

    let num3 = parseInt(str);

    return num3;
}

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
//
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
function howMuchILoveYou(nbPetals) {
        if  (nbPetals % 6 === 1) {
            return "I love you"
        }
        else if (nbPetals % 6 === 2) {
            return "a little"
        }
        else if (nbPetals % 6 === 3) {
            return "a lot"
        }
        else if (nbPetals % 6 === 4) {
            return "passionately"
        }
        else if (nbPetals % 6 === 5) {
            return "madly"
        }
        else {
            return "not at all"
        }
}

const phrases = [
    "not at all", //смещение -1 для первого элемента
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly"
]
function howMuchILoveYou(n) {
    return phrases[n%6] // (n + 6) % 6
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    let arr = [...string];
    //return arr.filter((el) => el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u').join('')

    return arr.filter(el => !'aeiou'.includes(el)).join('')
}

//Write a function which takes a number and returns the corresponding ASCII char for that value.
//
// Example:
//
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
function getChar(c){
    return String.fromCharCode(c)
}

//The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
function greet(language) {
    const greetings = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso",
    }

    const keys = Object.keys(greetings);
    let str = ''
    keys.filter(el => {
        if (el === language) {
            str = greetings[el]
        } else {
            str = 'Welcome'
        }
    })
    return str
}

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(sheep) {
    return sheep.filter(el => el).length
}

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    return array.map(el => -el)
}

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function smash (words) {
    return words.join(' ')
};

//Create a function with two arguments that will return an array of the first n multiples of x.
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).
//
// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
function countBy(x, n) {
    let z = [];

    for (let i = 1; z.length < n; i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }

    return z;
}

//For every good kata idea there seem to be quite a few bad ones!
//
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x){
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            arr.push(x[i])
        }
    }

    if (arr.length > 2) return 'I smell a series!'
    else if (arr.length <= 2 && arr.length >= 1) return 'Publish!'
    else return 'Fail!'
}

function well2(x) {
    let res = x.filter(el => el === 'good').length

    return res < 1 ? 'Fail!' : (res > 2 ? 'I smell a series!' : 'Publish')
}

//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce(function (a, b) {return a + b})
}

//Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//
// Notes:
//
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
    let res = 0
    games.map(el => {
        let arr = el.split(':');
        if (arr[0] > arr[1]) {
            res += 3
        } else if (arr[0] === arr[1]) {
            res += 1
        }
    })

    return res
}

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.
function getAverage(marks){
    return Math.floor(marks.reduce(function (a, b) {return a + b}) / marks.length)
}

function fixTheMeerkat(arr) {
    return arr.reverse()
}

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
// Note: there will always be exactly one wolf in the array.
//
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
    let str = ''
    if (queue[queue.length - 1] === 'wolf') {
        str = 'Pls go away and stop eating my sheep'
    } else {
        queue.reverse().find((el, index) => {if (el === 'wolf') {str = `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`}} )
    }

    return str
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number
function sumMix(x){
    let newArr = x.map(el => Number(el))
    return newArr.reduce(function (a, b) { return a + b})
}

//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:
//
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
//
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(el => !geese.includes(el))
};

//Write a method, that will get an integer array as parameter and will process every number from this array.
//
// Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
//
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
function squareOrSquareRoot(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            newArr.push(Math.sqrt(array[i]))
        } else {
            newArr.push(Math.pow(array[i], 2))
        }
    }
    return newArr;
}

function squareOrSquareRoot(array) {
    return array.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2))
}

//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//
// For example(Input --> Output):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
function monkeyCount(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
function divisibleBy(numbers, divisor){
    return numbers.filter(n => n % divisor === 0)
}

//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.
//
// Examples:
//
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
function distinct(a) {
    return  a.filter((item, index) => a.indexOf(item) === index);
}

//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
// Example(Input --> Output)
//
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//
// Note: String will have at least one element; words will always be separated by a space.
function addLength(str) {
   return str.split(' ').map(el => `${el} ${el.length}`)
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
function arrayMadness(a, b) {
    return a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0)
}

//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
//
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2).sort((a, b) => a - b)
    return newArr.filter((el, index) => newArr.indexOf(el) === index)
}

//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.
function twoSort(s) {
    return s.sort()[0].split('').join('***')
    // let firstWorld = s.sort()[0]
    // return firstWorld.split('').map((item, index) => index !== (firstWorld.length- 1) ? `${item}***` : item).join('')
}

//Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b)/nums.length
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
    return array.filter((el, index) => el % index === 0 || el === 0)
}

//Finish the uefaEuro2016() function so it return string just like in the examples below:
//
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played dra
function uefaEuro2016(teams, scores){
    let res = '';
    if (scores[0] > scores[1]) {
        res = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
        res = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
        res = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
    return res
}

//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

//You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
let items = []
items.push({a: "b", c: "d"})

//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
function isVow(a){
    for (let i=0; i < a.length; i++) {
        switch (a[i]) {
            case 97: a[i] = 'a'
                break
            case 101: a[i] = 'e'
                break
            case 105: a[i] = 'i'
                break
            case 111: a[i] = 'o'
                break
            case 117: a[i] = 'u'
                break
            default: a[i]
        }
    }
    return a
}

//Your task is to sum the differences between consecutive pairs in the array in descending order.
//
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
function sumOfDifferences(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    let res = []
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== sortArr[sortArr.length - 1]) {
            res.push(sortArr[i] - sortArr[i + 1])
        }
    }
    return (arr.length === 0 || arr.length === 1 || arr.every(v => v === arr[0])) ? 0 : res.reduce((a, b) => a+b)
}

//write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
function stringy(size) {
    let res = ''
    for (let i = 1; i <= size; i++) {
        i % 2 === 0 ? res+= '0' : res+= '1'
    }
    return res
}

//Task
// Given a year, return the century it is in.
//
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
function century(year) {
    return Math.ceil(year / 100);
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
String.prototype.toAlternatingCase = function () {
    return this.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('')
}

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow'
        case 'yellow':
            return 'red'
        case 'red':
            return 'green'
    }
}

//Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString){
    return parseInt(hexString, 16);
}

//The wide-mouth frog is particularly interested in the eating habits of other creatures.
//
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
//
// When he meets the alligator, it then makes a tiny mouth.
//
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
function mouthSize(animal) {
    return animal.toLowerCase() !== 'alligator' ? 'wide' : 'small'
}

//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//
// If you need help, here's a reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function take(arr, n) {
    return arr.slice(0, n)
}

//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    return typeof x === "string" ? 'Error' : x * 50 + 6
}

//You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
function otherAngle(a, b) {
    return 180 - a - b
}

//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//
// ball1 = new Ball();
// ball2 = new Ball("super");
//
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
var Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
    return sperm.split('').includes('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

//Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
function noBoringZeros(n) {
    return  Number(n.toString().replace(/0*$/,""))
}

//Complete the function which returns the weekday according to the input number:
//
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
function whatday(num) {
    const days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday',
    }

    return days[num] || 'Wrong, please enter a number between 1 and 7'
}

//Your task is simply to count the total number of lowercase letters in a string.
//
// Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26
function lowercaseCount(str){
    return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}

//To find the volume (centimeters cubed) of a cuboid you use the formula:
//
// volume = Length * Width * Height
//
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
//
// Return true if the cuboid could have equal sides, return false otherwise.
//
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//
// Note: side will be an integer
function cubeChecker(volume, side){
    return side > 0 && side**3 === volume
};

//An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.
//
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
//
// Note: The character is a string of length 1 or an empty string.
//
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"
function contamination(text, char){
    //return text.split('').map(el => el = char).join('')
    return text.replace(/./g, char)
}

//You are given a string containing a sequence of character sequences separated by commas.
//
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
//
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
//
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
function array(string) {
    return string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ')
}

//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
function remove (string) {
    //return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string
    return string.replace( /!$/, '')
}

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
//
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
//
// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
function calculator(a, b, sign) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "unknown value"
    }

    switch (sign) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return b !== 0 ? a / b : "unknown value"
        default:
            return "unknown value"
    }
}

//Now you have to write a function that takes an argument and returns the square of it.
function square (x) {
    return Math.pow(x, 2)
}

//You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
//
// Your task is to debug the code before your plants die!
function rainAmount(mm){
    if (mm < 40) {
        return `You need to give your plant ${40-mm}mm of water`
    }else {
        return "Your plant has had more than enough water for today!"
    }
}

//Combine strings function
// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.
//
// Example:
// With "James" as the first name and "Stevens" as the last name should return "James Stevens"
function combineNames(name, lastName) {
    return `${name} ${lastName}`
}

//Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
function replace(s){
    return s.replace(/[aeiou]/gi, '!')
}

//Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
// Example:
//
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//
// Example:
// 5.5589 is rounded 5.56
// -3.3424 is rounded -3.34
function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}

//In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
//
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
function xor(a, b) {
    // if (a === b) {
    //     return false
    // } else {
    //     return true
    // }
    return a !== b
}

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
    const s = 2 * (width*height + width*depth + height*depth)
    const v = width*height*depth

    return [s, v]
}

//Input: Array of elements
//
// ["h","o","l","a"]
//
// Output: String with comma delimited elements of the array in th same order.
//
// "h,o,l,a"
// Note: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays...
function printArray(array){
    return array.join(',')
}

//Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
    return parseInt(bin, 2)
}

//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//
// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
function usdcny(usd) {
    return (usd * 6.75).toFixed(2) + ' Chinese Yuan'
}

//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
//
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
function pillars(numPill, dist, width) {
    return numPill === 1 ? 0 : dist * (numPill - 1) * 100 + width * (numPill - 2)
}

//Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
//
// When bool is truthy, func1 should be called, otherwise call the func2.
//
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.
function _if(bool, func1, func2) {
    return bool ? func1() : func2()
}

//Complete the function that receives as input a string, and produces outputs according to the following table:
//
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
//
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case 'jabroni': {
            return "Patron Tequila"
        }
        case 'school counselor': {
            return "Anything with Alcohol"
        }
        case 'programmer': {
            return "Hipster Craft Beer"
        }
        case 'bike gang member': {
            return "Moonshine"
        }
        case 'politician': {
            return "Your tax dollars"
        }
        case 'rapper': {
            return "Cristal"
        }
        default: {
            return 'Beer'
        }
    }
}

//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
//
// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
function mango(quantity, price){
    return (Math.floor(quantity / 3) * 2  + (quantity % 3)) * price
}

//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
// For example, a multiplication table (string) for number == 5 looks like below:
//
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.
//
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
function multiTable(number) {
    let res = []
    let i = 1
    while (i < 11) {
        res.push(`${i} * ${number} = ${i*number}`)
        i++
    }

    return res.join('\n')
}

//Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main (verb, noun) {
    return verb + noun
}

//Find the sum of all multiples of n below m
//
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
function sumMul(n,m){
    if (n < 0 || n === 0 || m < 0) return 'INVALID'

    let sum = 0
    for (let i = n; i < m; i++) {
        if (i % n === 0) sum+=i
    }
    return sum
}

//For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
//
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
//
// Note: Make sure you return the correct message with correct spaces and punctuation.
function cookie(x){
    let name = ''
    switch (typeof x) {
        case 'number': {
             name =  "Monica"
            break
        }
        case 'string': {
             name =  "Zach"
            break
        }
        default: {
             name =  "the dog"
        }
    }

    return `Who ate the last cookie? It was ${name}!`
}

//I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
    let a = v1,
        b = v1;
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
    let a = v4, //set number value to a
        b = v2 ; //set number value to b
    return a - b;
}

function equal3(){
    let a = v1 , //set number value to a
        b = v5 ; //set number value to b
    return a * b;
}

function equal4(){
    let a = v4  , //set number value to a
        b =  v5; //set number value to b
    return a / b;
}

function equal5(){
    let a = v6, //set number value to a
        b = v3; //set number value to b
    return a % b;
}

//Time to test your basic knowledge in functions! Return the odds from a list:
//
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []
function odds(values){
    return values.filter(el => el % 2 !== 0);
}

//Write a simple regex to validate a username. Allowed characters are:
//
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
function validateUsr(username) {
    return /^[a-z0-9_]{4,16}$/.test(username)
}

//You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
//
// You can not use multiplier "*" operator.
//
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).
function billboard(name, price = 30){
    return name.split('').map(el => el = price).reduce((a, b) => (a + b), 0)
}

//Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
//
// Valid examples, should return true:
//
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:
//
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")
function isDigit(s) {
    s = s.trim()
    return !isNaN(s) && s !== ''
}

//Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
//
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"
function hello(name) {
    return name ? `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!` : `Hello, World!`;
}

// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}

//Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//
// For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
//
// If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n
function nearestSq(n){
    if (Number.isInteger(Math.sqrt(n))) return n

    let a = n
    while (Number.isInteger(Math.sqrt(a)) === false) {
        a++
    }

    let b = n
    while (Number.isInteger(Math.sqrt(b)) === false) {
        b--
    }

    return a - n > n - b ? b : a
}

//You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
//
// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
//
// Write a function that takes the website date/time in its original string format and returns the shortened format.
//
// Input
// Input will always be a string, e.g., "Friday May 2, 7pm".
//
// Output
// Output will be the shortened string, e.g., "Friday May 2".
function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(arr, item){
    return arr.includes(item)
}

//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//
// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false
function setAlarm(employed, vacation){
    return employed && !vacation
}

//Inspired by the development team at Vooza, write the function that
//
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//
// Note: your function should have a default parameter.
//
// For example(Input --> Output):
//
// "anyone else" --> 0
// "Zach" --> 18
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
}

// add the value "codewars" to the websites array 1,000 times
let websites = new Array(1000)
websites.fill("codewars")

//if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"
function leo(oscar){
    // Обычно switch сравнивает переданное значение с каждым case, но если нужно проверять условия, а не конкретные значения, то передаваемое значение должно быть true
    switch (true) {
        case oscar === 88:
            return "Leo finally won the oscar! Leo is happy";
        case oscar === 86:
            return "Not even for Wolf of wallstreet?!";
        case oscar < 88:
            return "When will you give Leo an Oscar?";
        default:
            return "Leo got one already!";
    }
}

//Create a method all which takes two params:
//
// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
//
// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True
function all( arr, fun ){
    // if (arr.length === 0) return true
    //
    // const newArr = arr.map(el => fun(el) ? '1' : '0')
    //
    // return !newArr.includes('0')

    return arr.every(fun)
}

//There was a test in your class and you passed it. Congratulations!
//
// But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return true if you're better, else false!
//
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a, b) => a + b) + yourPoints) / (classPoints.length + 1) > yourPoints
}