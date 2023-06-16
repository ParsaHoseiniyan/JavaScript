// exercise
allPrice = 0

for (var i = 1; i < 6; i++) {
	var allPrice = allPrice + Number(prompt(`your ${[i]} price: `))
}
console.log(allPrice)