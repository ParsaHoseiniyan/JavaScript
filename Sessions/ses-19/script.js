// session 19: exercise 5
// here I do the exercises for session 19 (solving in session 20)

var userBirthDate = Number(prompt("type your birth date:"))
var userAge = 1401 - userBirthDate

if (isNaN(userBirthDate)) {
    alert("Invalid Birth Date!")
} else {
    if (userBirthDate > 1401) {
        alert("Your Birth Date is unreal! \n You are borned in the future!!")
    } else {
        alert("Your Age is: " + userAge)
    }
    
}