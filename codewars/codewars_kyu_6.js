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
    return fetch(apiUrl).then((res) => {

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
