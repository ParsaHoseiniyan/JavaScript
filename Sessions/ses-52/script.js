// exercise: 
var userNumber = Number(prompt('enter a number: '))
var counter = 0
for (var i = 0; userNumber / 10 != 0; i++) {
	counter++
	userNumber = Math.floor(userNumber / 10)
}

console.log(counter)