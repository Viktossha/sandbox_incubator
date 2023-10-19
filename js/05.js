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