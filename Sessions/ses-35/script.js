// role of the return keyword in javascript
// there are two type of this function you see down below 
// there is just one difference in these two functions that the second function doesn't have the 13th line in the first function
// resource: https://javascript.info/function-basics#returning-a-value 

var number1 = Number(prompt('first number: '))
var number2 = Number(prompt('second number: '))

function showpower (num1, num2) {
	return num1 ** num2
}

var resultOfFunction = showpower(number1, number2)
alert('power result: ' + resultOfFunction)

////////////////////////////////////////////////

var Number1 = Number(prompt('first number: '))
var Number2 = Number(prompt('second number: '))

function power (x, y) {
	return x ** y
}

alert("your second power result: " + power(Number1, Number2))
