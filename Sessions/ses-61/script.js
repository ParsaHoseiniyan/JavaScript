// exercise about arrays
// اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ای ذخیره کنید
// و سپس میانگین آن ها را محاسبه کرده و نمایش دهید
var userNumbers = []
var userNumber = 0
var sum = 0 

while (userNumber != -1) {
	userNumber = Number(prompt('type a number: \n enter -1 if you dont want to enter any number.'))
	if (userNumber != -1) {
		userNumbers.push(userNumber)
	}
}

for (var i = 0; i < userNumbers.length; i++) {
	sum = sum + userNumbers[i]
}

console.log("Average: ", sum / userNumbers.length)