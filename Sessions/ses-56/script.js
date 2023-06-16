//exercise for while-loop(the purpose of this exercise is that you know that you wll not have the stop condition in
// loops we have to write the stop condition by ourselves.)
var userNumber = 0
var sum = 0
var counter = 0

while (userNumber >= 0) {
	sum = sum + userNumber // => first it should plus sum to userNumber and after that get a new number from user
	userNumber = Number(prompt('Enter The Number: \n if you dont have a number, enter a negetive number'))
	if (userNumber >= 0) {
		counter++
	}
}
// console.log("Sum: " + sum + "\n" + "counter: " + counter)
console.log("Average: " + sum / counter)