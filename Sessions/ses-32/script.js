// This session is solving the exercise given in the last session


// function userNumber () {
//     var userNumber_get = Number(prompt('type a number: '))
//     if (userNumber_get % 2 === 0) {
//         alert('your number is even')
//     } 
//     else if (userNumber_get === null) {
//         alert('you did not type anything!')
//     }
//     else if (userNumber_get === NaN) {
//         alert('you did not type a number!')
//     } 
//     else {
//         alert('your number is odd')
//     }

// }

// // there is a problem with this structure
// // if we don't type enything in the alert box, it still returns the if property(your numbre is even)


// userNumber()




// the teacher's solution is written down below(so easy):

function isEvenOrOdd (number) {
	if (number % 2 === 0) {
		alert(number + ' Is Even')
	} else {
		alert(number + ' Is Odd')
	}
}

isEvenOrOdd(12)
isEvenOrOdd(108)
isEvenOrOdd(108236897)
isEvenOrOdd(119)
isEvenOrOdd(0)
isEvenOrOdd(149)