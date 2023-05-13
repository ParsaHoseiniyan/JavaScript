// In this page I write the exercise for session 27 (switch case)

var userGPA = prompt("type your GPA (grade point average) (0 to 20):")
if(userGPA <= 21 && userGPA >= 0) {
    switch(userGPA) {
        case '20':
        case '19':
        case '18':
            alert("A")
            break;
        case '17':
        case '16':
        case '15':
            alert("B")
            break;
        case '14':
        case '13':
        case '12':
            alert("C")
            break;
        default:
            alert("rejected!")
            break;
    }
}
