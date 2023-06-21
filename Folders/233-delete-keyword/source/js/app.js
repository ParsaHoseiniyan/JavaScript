let user = {
    id: 1,
    name: 'Mohammad',
    pass: '12345',
    age: 19
}

console.log("before delete", user);

console.log('delete result:', delete user.age);

console.log('after delete', user);

////////////////////////////////////////////////////////////////

// let scores = [10, 20, 30, 40, 50, 60]

// delete scores[2]

// console.log(scores[2]);