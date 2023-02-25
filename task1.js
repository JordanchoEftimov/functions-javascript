
function calculator(a, b, operator = '+') {
    switch(operator) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        default:
            console.log("Invalid operator");           
    }
}

calculator(2, 5);
calculator(10, 7, '-');