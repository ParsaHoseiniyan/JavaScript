// exercise: 
var userNumber = Number(prompt('enter a number: '))
var counter = 0

if (isNaN(userNumber) == false) {

	if (userNumber == 0) {
		counter = 1
	} else {
		for (var i = 0; userNumber / 10 != 0; i++) {
			counter++
			userNumber = Math.floor(userNumber / 10)
		}
		
	}
	alert(counter)
} else {
	alert('faaaaaalse! It should be a number!')
}



