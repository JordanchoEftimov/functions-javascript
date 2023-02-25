function smallerNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let smaller = smallerNumber(-1, -2);
console.log(smaller);