let $ = document
const addBookBtn = $.querySelector('.add-btn')
const titleInputElem = $.querySelector('#title')
const authorInputElem = $.querySelector('#author')
const yearInputElem = $.querySelector('#year')
const booksContainer = $.querySelector('.table')

let books = []

addBookBtn.addEventListener('click', function (event) {
    event.preventDefault()

    let titleInputValue = titleInputElem.value
    let authorInputValue = authorInputElem.value
    let yearInputValue = yearInputElem.value

    let newBookObject = {
        id: books.length + 1,
        title: titleInputValue,
        author: authorInputValue,
        year: yearInputValue
    }

    books.push(newBookObject)

    setIntoLocalStorage(books)

})

function setIntoLocalStorage(allBooksArray) {
    localStorage.setItem('books', JSON.stringify(allBooksArray))
    makeEmptyInputs()
}

function makeEmptyInputs() {
    titleInputElem.value = ''
    authorInputElem.value = ''
    yearInputElem.value = ''
}