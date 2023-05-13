// session 17: exercise 3
// here I do the exercises for session 17 (solving in session 18)

var userAge = Number(prompt("type your age:"))

if (typeof userAge == Number){
    if (userAge < 18){
        alert("Not allowed to enter the website!")
    } else {
        alert("Welcome to our website!")
    }
} else {
    alert("Invalid number!")
} 
    