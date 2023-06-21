let inputElem = document.getElementById('input')

// let hasInputElemAttr = inputElem.hasAttribute('href') // boolean

// console.log(hasInputElemAttr)

function removeAttrHandler () {
    let result = inputElem.removeAttribute('placeholder') // void
    console.log(result)
}