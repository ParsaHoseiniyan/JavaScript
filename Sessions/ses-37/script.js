// exercise for session 36 is done in session 37(here)
// this exercise is about making a registor form that user needs to add a username in atleast 3 charachters and a password with atleast 8 charachters

var userName = prompt("add a username for your account: ")
var userPass = prompt('add a password for your account: ')

if (userName.length < 3 || userPass.length < 8) {
    alert('you can not registor because your username should be at least 3 charachters or your password should be atleast 8!')
} else {
    alert('successfully added!')
}
