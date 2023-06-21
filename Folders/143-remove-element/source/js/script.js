// let btn = document.querySelector('button')
// let h1Elem = document.getElementById('title')
// let h1TextElem = document.getElementsByClassName('text')

// btn.addEventListener('click', function () {
//     // console.log('Click');
//     // h1Elem.remove()
//     h1TextElem[0].remove()
// })

//////////////////////////////////////

let listItems = document.querySelectorAll('.list-item')

// console.log(listItems)

listItems.forEach(function (li) {
    li.addEventListener('click', function (event) {
        // event.target.remove()
        event.target.parentElement.remove()
    })
})