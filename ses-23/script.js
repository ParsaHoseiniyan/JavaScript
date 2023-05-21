// session 23: exercise 7
// here I do the exercises for session 23 (solving in session 24)

var userAge = Number(prompt("type your age:"))
var userSex = Number(prompt("type your sex(male or female):"))

if(isNaN(userAge)) {
    alert("type your age as Number")
} else{
    if(userSex === "female" || userAge < 18){
        alert("Not allowed to enter the website!")
    } else {
        alert("Welcome to our website!")
    } 
}

