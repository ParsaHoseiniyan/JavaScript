const usersList = document.querySelector('#users')

let usersArray = [
    'Amin',
    'Ali',
    'Amir',
    'Babak',
    'Hasan',
    'Qadir'
]

let newUserLi = null

let usersFragment = document.createDocumentFragment()

usersArray.forEach(function (user) {
    newUserLi = document.createElement('li')
    newUserLi.innerHTML = user

    usersFragment.appendChild(newUserLi)
})

usersList.appendChild(usersFragment)