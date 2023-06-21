function insertName () {

    localStorage.setItem('name', 'Amin')

    // Key: name    value: 'Amin'
    console.log('Insert Name');
}

function getName () {
    let localName = localStorage.getItem('name')

    console.log(localName);
}

function clearData () {
    localStorage.clear()
}