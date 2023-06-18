// how to work with while loop

// var i = 0

// while (i < 100) {
// 	// Codes 
// 	console.log(i)
// 	i += 2
// }

var userNumber = null
var i = 0
var sum = 0

while (i < 3) {
	userNumber = Number(prompt('Enter The Number: '))
	sum += userNumber // sum = sum + userNumber
	i++
}

alert('Average: ' + (sum / 3))