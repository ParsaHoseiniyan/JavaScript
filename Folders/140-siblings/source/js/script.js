let head1 = document.getElementById('head1')
let head2 = document.getElementById('head2')
let head3 = document.getElementById('head3')
let head4 = document.getElementById('head4')
let head5 = document.getElementById('head5')
let head6 = document.getElementById('head6')

let listItems = document.getElementsByClassName('list-item')
let list = document.getElementById('list')

// console.log(head3.parentNode);
// console.log(head1.parentElement);

// console.log(head3.previousElementSibling.previousElementSibling);
// console.log(head3.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(listItems[2].nextSibling.nextSibling);
// console.log(listItems[2].previousSibling.previousSibling.previousSibling.previousSibling);
// console.log(listItems[2].previousElementSibling);

// console.log(list.childElementCount);
// console.log(list.children[2]);
// console.log(list.childNodes);
// console.log(list.hasChildNodes()); // Boolean
// console.log(list.firstChild);
// console.log(list.lastChild);
console.log(list.firstElementChild);
console.log(list.lastElementChild.firstElementChild.style.color = 'red');
