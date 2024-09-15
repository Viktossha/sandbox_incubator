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