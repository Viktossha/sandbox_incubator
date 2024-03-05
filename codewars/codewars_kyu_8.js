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