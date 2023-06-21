// DOM => Document Object Model
// BOM => Browser Object Model

let reloadBtn = document.querySelector('button')

reloadBtn.addEventListener('click', function () {
    // console.log('Reload');
    
    location.reload()

    // location.assign()
    // location.replace()
})