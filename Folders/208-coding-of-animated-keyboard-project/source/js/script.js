document.addEventListener('keyup', function (event) {
    // console.log(event.key);

    let userEventKey = event.key.toUpperCase() // 's a d'
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function () {
        mainKeyElem.classList.remove('hit')
    })

    console.log(mainKeyElem);

})