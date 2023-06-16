var number1 = Number(prompt('first number: '))
var number2 = Number(prompt('second number: '))

if (number1 % 2 == 0) {
	while (number1 <= number2) {
		number1 += 2
		console.log(number1)
	}
} else {
	var evenNumber = number1 + 1
	while(evenNumber < number2) {
		console.log(evenNumber)
		evenNumber += 2
	}

}

