let logBtn = document.getElementById('btn')
let usernameInput = document.getElementById('username')


logBtn.addEventListener('click', function (event) {
    console.log(event)
})


usernameInput.addEventListener('keydown', function (event) {
    console.log(event)
    // if (event.key === 'Enter') {
    if (event.keyCode === 13) {
        console.log("اینتر فشار داده شد")
    }
})