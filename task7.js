function largerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let larger = largerNumber(10, 12);
console.log(larger);
larger = largerNumber(-1, -20);
console.log(larger);