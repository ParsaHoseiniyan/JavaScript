let editorElem = document.getElementById('editor')

function copyHandler (event) {
    event.preventDefault()
    console.log('Copy');
}

function cutHandler (event) {
    event.preventDefault()
    console.log('Cut');
}

function pasteHandler (event) {
    event.preventDefault()
    console.log('Paste');
}



editorElem.addEventListener('copy', copyHandler)
editorElem.addEventListener('cut', cutHandler)
editorElem.addEventListener('paste', pasteHandler)