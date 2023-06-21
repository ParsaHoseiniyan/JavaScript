function dragStartHandler (event) {
    console.log('Drag Start');

    event.dataTransfer.setData('elemId', event.target.id)

}

function dropHandler (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)

    event.target.append(targetElem)

    console.log('Drop');

}

function dragOverHandler (event) {
    event.preventDefault()
    // console.log('DragOver');
}


// Dragged -> onDragStart onDrag onDragEnd
// Dropped -> onDragEnter onDragOver onDragLeave onDrop