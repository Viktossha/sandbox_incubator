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