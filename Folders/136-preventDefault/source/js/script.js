let loginForm = document.getElementById('form')
let usernameInput = document.getElementById('username')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event)
})


usernameInput.addEventListener('keydown', function (event) {
    event.preventDefault()
    console.log(event)
})