
var userNumber = null
var sum = 0

for (var i = 0 ; i < 5 ; i++) {
	userNumber = Number(prompt('Enter The ' + (i + 1) +  ' Number:'))
	
	sum = sum + userNumber
}


console.log("Average: " + (sum / 5))