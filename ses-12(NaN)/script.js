// NaN => Not a Number
var str1 = "parsa"

var num1 = 6

alert(str1 - num1) // This is not logical, so we recieve NaN

alert(typeof NaN)

// typeof NaN => number

alert("12" / 4) 

/* JS can identify that if the string can be a number so that it makes it number and
it does numeric calculation on it;

(there is an exception => + (this operator always does concat for strings)) */


// Working with the isNaN method: you can simply understand that if sth is NaN or not in your source code.

/* 1 tip: we use () after every method */

// isNaN gives us true or false
alert(isNaN(str1 / num1)) // true


// session 14: comparative operators

// == , < , > , >= , =< , ===

// what is the differce between == and === ?
// == have nothing to do with the type of the variables and it just compares the values

// but when we use === , in the first step it checks the type of the variables

alert("12" === 12) // => false