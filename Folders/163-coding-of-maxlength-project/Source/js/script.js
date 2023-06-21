let $ = document

const inputElem = $.querySelector('input')
const spanElem = $.querySelector('.counter')
const inputMaxLength = inputElem.getAttribute('maxlength') // 19

inputElem.addEventListener('keyup', function () {
    spanElem.innerHTML = inputMaxLength - inputElem.value.length // 15
})
