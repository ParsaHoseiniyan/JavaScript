const boxElem = document.getElementById('box')
const btnElem = document.getElementById('btn')

function mouseMoveHandler () {
    console.log('Mouse Move :)');
}

function removeHandler () {
    boxElem.removeEventListener('mousemove', mouseMoveHandler)
    console.log('Event Removed :)');
}

btnElem.addEventListener('click', removeHandler)
boxElem.addEventListener('mousemove', mouseMoveHandler)