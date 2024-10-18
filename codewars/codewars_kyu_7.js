// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
    let peopleOn = 0;
    let peopleOff = 0;

    for (i = 0; i < busStops.length; i++) {
        peopleOn += busStops[i][0];
        peopleOff += busStops[i][1];
    }

    return peopleOn - peopleOff
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

    let arrO = 0
    let arrX = 0

    str.toLowerCase().split('').map((item, index) => {
        if (item === ('o' || 'O')) {
            arrO += 1
        }
        if (item === ('x' || 'X')) {
            arrX += 1
        }
    })

    return arrO === arrX
}

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    return str.split('').filter(el => 'aeiou'.includes(el)).length
}

//Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
    return array.length !== 0 ? (array.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd') : 'even'
}

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s[s.length / 2 - 1] + s[s.length / 2]
    } else {
        return s[s.length / 2 - 0.5]
    }
}

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    return str.split(' ').map((el) => el.split('').reverse().join('')).join(' ')
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n){
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str){
    return str.length === 0 ? true : str.toLowerCase().split('').filter((el, index) => str.toLowerCase().indexOf(el) !== index).length === 0
}

//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    let err = ['n' , 'o' , 'p' , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let res = []

    for (let i = 0; i < s.length; i++) {
        if (err.includes(s[i])) {
            res.push(s[i])
        }
    }

    return `${res.length}/${s.length}`

    // // your code
    //     var count = 0;
    //     for(var i = 0; i < s.length; i++) {
    //       if (s[i] > "m") {
    //         count++;
    //       }
    //     }
    //     return count+"/"+s.length;
}

//Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000, but fixed tests go higher.
//
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
function getDivisorsCnt(n){
    let res = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i)
        }
    }

    return res.length
}
//код выше не работает для больших n

//Число n имеет делители, которые являются такими числами d, что n % d === 0 (т.е. остаток от деления n на d равен нулю). Мы хотим найти количество таких делителей. Вместо того чтобы проверять все числа от 1 до n, можно использовать более эффективный метод, перебирая числа только до квадратного корня из n. Если d — делитель числа n, то существует ещё один делитель, равный n / d. Например, для числа 28, делителями являются 1 и 28, 2 и 14, 4 и 7. Обратите внимание, что пары делителей связаны: 1 и 28, 2 и 14, 4 и 7.
function getDivisorsCnt2(n){
    let res = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            res.push(i)
            if (i !== n / i) {
                res.push(n / i)
            }
        }
    }

    return res.length
}

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    let s = s1 + s2
    return s.split('').filter((el, index) => s.split('').indexOf(el) === index).sort().join('')
}

//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//
// Example:
// // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
};

//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//
// For example, if this array were passed as an argument:
//
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
}

//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    //return s.split(' ').map(el => el.length).sort((a, b) => a - b)[0]
    return Math.min(...s.split(' ').map(el => el.length))
}

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
function removeUrlAnchor(url){
    return url.split('#')[0]
}

//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};

//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
function gimme (triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
}

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    const res = [...numbers]

    for (let i = 0; i < res.length; i++) {
        if (res[i] === min) {
            res.splice(i, 1)
            break
        }
    }

    return res.length !== 0 ? res : []
}

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 17, 17, 3, 17] ==> 3
function stray(numbers) {
    if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
        return numbers[0];
    }

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[0]) {
            return numbers[i];
        }
    }
}

//Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
// You will need to figure out the rule of the series to complete this.
//
// Rules
// You need to round the answer to 2 decimal places and return it as String.
//
// If the given value is 0 then it should return "0.00".
//
// You will only be given Natural Numbers as arguments.
//
// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
function SeriesSum(n) {
   // let arr = []
   //  for (let i = 0; arr.length !== n; i++) {
   //
   //          arr.push((1/(1 + i*3)))
   //  }
   //  return arr.reduce((a, b) => a + b).toFixed(2)

    if (n === 0) return '0.00'
    let res = 0

    for (let i = 0; i < n; i++) {
        res += (1/(1 + i*3))
    }

    return res.toFixed(2)
}
//Формула 1/(1+3*k) описывает последовательность дробей, где каждый следующий член имеет знаменатель, увеличивающийся на 3 по сравнению с предыдущим.
//k — это индекс или номер элемента последовательности, начиная с 0
//1 — это числитель каждого элемента последовательности. Все элементы имеют одинаковый числитель.
//1 + 3k — это знаменатель, который увеличивается с шагом 3 для каждого нового члена последовательности.



//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
    // if (pin === '0000' || pin === '000000') return true
    // if (pin.length === 4 || pin.length === 6) {
    //     let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //     let res = numbers.filter(el => pin.includes(el))
    //     console.log(res)
    //     return res.length === pin.split('').length
    // } else return  false

    return (pin.length === 4 || pin.length === 6) ? /^\d+$/.test(pin) : false
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}
//
// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Input strings will only contain letters. Note: keep the original order of the names in the output.
function friend(friends){
    return friends.filter(el => el.length === 4)
}

//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
};

//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//
// If the score < 0, return 0.
//
// For example:
//
//     Correct answer    |    Student's answer   |   Result
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
function checkExam(array1, array2) {
    let res = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            res+=4
        } else if (array2[i] === '') {
            res+=0
        } else {
            res-=1
        }
    }

    return res > 0 ? res : 0
}

// In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
function squareDigits(num){
    return Number(num.toString().split('').map(el => el**2).join(''))
}

//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
// Examples: (Input --> Output)
//
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
var number=function(array){
    // let res = []
    // for (let i = 0; i < array.length; i++) {
    //     res.push(`${i + 1}: ${array[i]}`)
    // }
    //
    // return res.length > 0 ? res : []
    return array.map((el, index) => `${index + 1}: ${el}`)
}

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
    let arr = numbers.split(' ').sort((a, b) => a - b)
    let max = arr[arr.length - 1]
    let min = arr[0]
    return `${max} ${min}`
}

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
    let sortArr = numbers.sort((a, b) => a - b)
    return sortArr[0] + sortArr[1]
}

//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
function sumDigits(number) {
    return Math.abs(number).toString().split('').map(el => Number(el)).reduce((a, b) => a + b)
}

//You need to write a function that reverses the words in a given string. Words are always separated by a single space.
//
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
function reverse(string){
    return string.split(' ').reverse().join(' ')
}

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
    return l.filter(el => Number.isInteger(el))
}

//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more: http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function dnaStrand(dna){
    let arr = dna.split('')

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'A':
                arr[i] = 'T'
                break
            case 'T':
                arr[i] = 'A'
                break
            case 'G':
                arr[i] = 'C'
                break
            case 'C':
                arr[i] = 'G'
                break
        }
    }

    return arr.join('')
}

//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
function solve(s){
    let resLow = 0
    let resUp = 0
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() === arr[i]) {
            resLow++
        } else if (arr[i].toUpperCase() === arr[i]) {
            resUp++
        }
    }

    // if (resLow > resUp || resLow === resUp) {
    //     return s.toLowerCase()
    // } else {
    //     return s.toUpperCase()
    // }

    return resUp > resLow ? s.toUpperCase() : s.toLowerCase()
}

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
//
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
function solution(nums){
    return nums ? nums.sort((a, b) => a - b) : []
}

//Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data){
    return data.map(item => item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open')
}

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
function getSum(a, b)
{

    // if (a > b) {
    //     let arr = [b]
    //     for (let i = 0; i <= a; i++) {
    //         arr.push(arr[i] + 1)
    //     }
    //     return arr.reduce((a, b) => a + b)
    // }
    //
    // if (a < b) {
    //     let arr = [a]
    //     for (let i = 0; i <= b; i++) {
    //         arr.push(arr[i] + 1)
    //     }
    //     return arr.reduce((a, b) => a + b)
    // }
    //
    // if (a === b) {
    //     return a
    // }

    //есть формула для суммы последовательных чисел S = (n1+n2)*k / 2
    let min = Math.min(a, b)
    let max = Math.max(a, b)

    return ((a + b) * (max - min + 1)) / 2
}

//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
function factorial(n)
{
    if (n < 0 || n > 12) {
        throw new RangeError()
    }

    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }

    return res
}

//Challenge:
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b)
}