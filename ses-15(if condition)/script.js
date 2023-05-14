// session 15: Use if in JavaScript
// here I do the exercises for session 15
// resourcers: https://javascript.info/ifelse
// the problem or exercise solving session is session 16

var Num = prompt("type a number to identify if it is even or odd:")

if (Num % 2 == 0) {
    alert("It's even")
} else {
    alert("It's odd")
}


//vibracode introductions:


//ternary conditions
let result;
result = a == b ? true : false; //result becomes false - we can put other codes instead of true or false
result = a == b ? true : a == 12 ? true : false; //we can use as many ? as we want like elseif
//if else

if (a < b) {
    //these codes will execute if (a==b) is true
}

if (a == b) {
    //these codes will execute if (a==b) is true
} else {
    //these codes will execute if (a==b) is false
}

if (a == b) {
    //these codes will execute if (a==b) is true
} else if (a == b) {
    //these codes will execute if (a==b) is true
}
//  multiple else if can be writen here
else {
    //these codes will execute if (a==b) is false
}