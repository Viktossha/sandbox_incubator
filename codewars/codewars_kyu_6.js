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