//Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    let arr = string.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = ' ' + arr[i]
        }
    }

    return arr.join('')
}

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
    let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
    let indexOddArr = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = oddArr[indexOddArr]
            indexOddArr++
        }
    }

    return array
}

//Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
//
// Ex:
//
// 274 -> '2-7-4'
// 6815 -> '68-1-5'
function dashatize(num) {
    let str = num.toString().split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i+1] % 2 !== 0) {
            str[i] = str[i] + '-'
        } else if (str[i] % 2 !== 0 && str[i+1] % 2 !== 0) {
            str[i] = str[i] + '-'
        } else if (str[i] % 2 !== 0 && str[i+1] % 2 === 0) {
            str[i] = str[i] + '-'
        }
    }

    return str.join('').replace(/^-+|-+$/g, '')
}

//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
function reverse(str) {
    return str.trim().split(' ').map((el, index) => index % 2 === 0
        ? el
        : el.split('').reverse().join(''))
        .join(' ')
}

// In the sample test case (submitOrder(12345)), "Your order was placed successfully" should be logged to the console. Hit "Attempt" to see if you pass the kata.
//
// Some notes:
//
// You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
// User "12345" is a valid user for testing
// Any provided function whose name ends in Async returns a Promise.
// Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
// As you may have gathered, the purpose of this Kata is to familiarize yourself with using JavaScript Promises for asynchronous programming.
async function submitOrder(user) {

    // Get the current user's shopping cart
    let shoppingCart = await OrderAPI.getShoppingCartAsync(user)

    // Also look up the ZIP code from their profile
    let profile = await CustomerAPI.getProfileAsync(user)
    let zipCode = profile.zipCode

    // Calculate the shipping fees
    let shippingRate = calculateShipping(shoppingCart, zipCode);

    // Submit the order
    let orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)

    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}

//There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.
//
// Your challenge
// Write an async function which takes an apiUrl and jokeId which returns a promise.
// The data will need to be filtered to get the specified joke by id.
// When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
// Handle error cases
//
// If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
// Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
function sayJoke(apiUrl, jokeId) {
    if (apiUrl !== 'http://great.jokes/christmas') {
        throw new Error(`No jokes at url: ${apiUrl}`)
    }
    return fetch(apiUrl)
        .then(res => res.json())
        .then((res) => {

        if (!Array.isArray(res.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`)
        }
        let currentJoke = res.jokes.find(el => el.id === jokeId)

        if (!currentJoke) {
            throw new Error(`No jokes found id: ${jokeId}`)
        } else {
            return {
                saySetup: () => currentJoke.setup,
                sayPunchLine: () => currentJoke.punchLine,
            }
        }
    })
}

//Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.
//The left side letters and their power:
//
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
//
// Example (Input --> Output)
// "s*zz"           --> "Right side wins!"
// "*zd*qm*wp*bs*"  --> "Let's fight again!"
// "zzzz*s*"        --> "Right side wins!"
// "www*www****z"   --> "Left side wins!"
function alphabetWar(fight)
{
    const powerLeft = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1
    }
    const powerRight = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1
    }

    let arr = fight.split('')
    // let arrIndices = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === '*') {
    //         arrIndices.push(i)
    //         if(i > 0) arrIndices.push(i-1)
    //         if(i < arr.length -1) arrIndices.push(i+1)
    //     }
    // }
    // let filteredArr = arr.filter((el, i) => !arrIndices.includes(i))

    let filteredArr = arr.filter((el, i) => {
        return arr[i] !== '*' && arr[i-1] !== '*' && arr[i+1] !== '*'
    })

    let resRight = 0
    let resLeft = 0

    for (let i = 0; i < filteredArr.length; i++) {
        for (const key in powerRight) {
            if (key === filteredArr[i]) {
                resRight += powerRight[key]
            }
        }
        for (const key in powerLeft) {
            if (key === filteredArr[i]) {
                resLeft += powerLeft[key]
            }
        }
    }
    return resRight > resLeft ? "Right side wins!" : (resRight < resLeft ? "Left side wins!": "Let's fight again!")
}

//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
function spinWords(string){
    return string.split(' ').map(el => el.length > 4 ? [...el].reverse().join('') : el).join(' ')
}

//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
function findOutlier(integers){
    const res = []
    const filteredArray = integers.filter(el => el % 2 === 0 ? true : (res.push(el), false))
    console.log(res)
    console.log(filteredArray)
    return res.length === 1 ? res[0] : filteredArray[0]
}

//You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.
//
// Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
//
// The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.
//
// Examples (Input --> Output)
// [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]
// [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]
// [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]
function mineLocation(field) {
    let bomb = 1
    let res = []
    for (let i = 0; i < field.length; i++) {
        if (field[i].includes(bomb)) {
            let index = field[i].findIndex(el => el === bomb)
            res.push(i)
            res.push(index)
        }

    }
    return res
}

//Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
    const count = {}

    for (let countElement of A) {
        if (count[countElement]) {
            count[countElement]++
        } else {
            count[countElement] = 1
        }
    }

    for (let countKey in count) {
        if (count[countKey] % 2 !== 0) {
            return +countKey
        }
    }
}

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digitalRoot(n) {
    while (n >= 10) {
        let sum = 0
        let arr = n.toString().split('')

        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i]
        }
        n = sum
    }

    return n
}

//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function duplicateCount(text){
    if (text.length === 0) return 0
    const arr = text.toLowerCase().split('')
    let counts = {}
    let res = 0

    for (const el of arr) {
        if (counts[el]) {
            counts[el] += 1
        } else {
            counts[el] = 1
        }
    }

    for (const key in counts) {
        if (counts[key] > 1) {
            res += 1
        }
    }

    return res
}

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If a number is a multiple of both 3 and 5, only count it once.
function solution(number){
    if (number <= 0) return 0
    let res = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 ===0 || i % 5 === 0) res += i
    }

    return res
}

//Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
//
// Examples
// Valid arrays
//
// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays
//
// [] is invalid because it is empty
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer
function upArray(arr){
    if (arr.length === 0) return null

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9 ) {
            return null
        }
    }

    let sum = (BigInt(arr.join('')) + 1n).toString()
    while (sum.length < arr.length) {
        sum = '0' + sum
    }

    return sum.split('').map(el => +el)
}

//The number
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8
// 1
//  +9
// 2
//
//
// The next number in having this property is
// 135
// 135:
//
// See this property again:
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1
// 1
//  +3
// 2
//  +5
// 3
//
//
// Task
// We need a function to collect these numbers, that may receive two integers
// a
// a,
// b
// b that defines the range
// [
// a
// ,
// b
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
// Examples
// Let's see some cases (input -> output):
//
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range
// [
// a
// ,
// b
// ]
// [a,b] the function should output an empty list.
//
// 90, 100 --> []
function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i <= b ; i++) {
        if (i < 10) arr.push(i)
        else {
            let arrI = i.toString().split('')
            let sum = 0
            for (let j = 0; j < arrI.length; j++) {
                sum += Math.pow(+arrI[j], j+1)
            }
            if (sum === i) arr.push(i)
        }
    }

    return arr.map(el => +el)
}

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
function duplicateEncode(word){
    let newWord = word.toLowerCase()
    const obj = {}
    for (let i = 0; i < newWord.length; i++) {
        if (!obj[newWord[i]]) {
            obj[newWord[i]] = 0
        }
        obj[newWord[i]]++
    }

    let res = ''

    for (let i = 0; i < newWord.length; i++) {
        if (obj[newWord[i]] > 1) {
            res += ')'
        } else {
            res += '('
        }
    }

    return res
}

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
var uniqueInOrder=function(iterable){
    const res = []

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]) {
            res.push(iterable[i])
        }
    }

    return res
}

//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
// Rules for a smiling face:
//
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
//return the total number of smiling faces in the array
function countSmileys(arr) {
    if (!arr.length) return 0
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
// For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"
//
// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.
//
// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
//
// For C: do not mutate input.
function solve(s) {
    const arr = s.split(/[aeiou]/);

    const result = arr.map(el => {
        const letters = [...el]
        return letters.reduce((sum, ch) => {
            return sum + (ch.charCodeAt(0) - 96)
        }, 0);
    });

    return Math.max(...result);
}

//John has invited some friends. His list is:
//
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
//
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
//
// So the result of function meeting(s) will be:
//
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
function meeting(s) {
    const arr = s.split(';').map(el => el.toUpperCase().split(':'))
    const arrSort = arr.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1
        }

        if (a[1] < b[1]) {
            return -1
        }

        if (a[1] === b[1]) {
            if (a[0] > b[0]) {
                return 1
            }

            if (a[0] < b[0]) {
                return -1
            }

            return 0
        }
    })

    return arrSort.map(el => `(${el[1]}, ${el[0]})`).join('')

}