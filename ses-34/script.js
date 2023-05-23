// Determine default values for the input of functions

// you can just determine defoult values for the input of the functions like the syntax down below:
function sumValue (num1 = 1, num2 = 2)  {

	// if (num1 == undefined) {
	// 	num1 = 1
	// }
	// if (num2 == undefined) {
	// 	num2 = 2
	// }
	var result = num1 + num2
	alert("Result= " + result)
}

sumValue(10)