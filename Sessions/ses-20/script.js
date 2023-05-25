// session 20: exercise 6
// here I do the exercises for session 20 (solving in session 21)

var userInputMinute = Number(prompt("type your time as minute to convert it to hour:"))
var userHour = userInputMinute / 60

if(isNaN(userHour)) {
    alert("Invalid minute(it must be a number)!")
} else {
    if(userInputMinute < 0) {
        alert("We don't have negetive times idiot!")
    }else if(userInputMinute == 0) {
        alert("Why are you annoying me?? Zero minutes?? really??")
    } else {
        alert(`your resault is: ${userHour} Hours.`)
    }
}

