// exercise:
var userNumber = Number(prompt('enter a number: '))
var sum = null
for (var i = 0; userNumber / 10 != 0; i++) {
	sum = sum + (userNumber % 10)
	userNumber = Math.floor(userNumber / 10)
}
console.log("plus: " + sum)