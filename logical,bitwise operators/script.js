let a = 3,
    b = 4;

//logical operators

console.log(a == b); //is equal?  false
console.log(a != b); //is not equal? true
console.log(a > b); //is a greater than b? false
console.log(a < b); //is a less than b? true
console.log(a === b); //is the value and the typeof of a and b the same? true

//bitwise operator
/*

  a=3 || b=0   //OR: atleast one of them should be true so the statement be true
  a=3 && b=0   //AND: both of themshould be true so the statement be true


*/


//bitwise operator conditions in one line
userAge = 12;
userAge > 18 && alert("you logged in");
userAge < 18 && alert("you are no eligible"); //when first condition is false second condition is not even checked
let isSet = userAge || 18; // if userAge is true it assigned to isSet if not 18 will assigned to it cause 18 is true
//in ES11 we can use ?? instead of ||
isSet = userAge ?? 18; // this just ignore if its 'null or undefined' but in '||' it ignores all falsy values
isSet = (userAge || 12) ?? 18; //if in parantesis becomes null or undefined it will ignore it and if its other falsy it will be assigned to variable