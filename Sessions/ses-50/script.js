// exercise 2

// method 1:

// var userNumber = null

// for (var i = 0; i < 5; i++) {
// 	userNumber = userNumber + Number(prompt(`type your ${[i + 1]} number: `))
// }
// var avg = userNumber / 5
// alert('your average: ' + avg)

// method 2:
var userNumber = null
var sum = 0

for (var i = 0 ; i < 5 ; i++) {
	userNumber = Number(prompt('Enter The ' + (i + 1) +  ' Number:'))

	sum = sum + userNumber
}


console.log("Average: " + (sum / 5))