
// 8! = 8 * 7 * 6 * 5 .. * 2 * 1
// 3! = 3 * 2 * 1
function factoriel(number) {
    let product = 1;
    while (number > 0) {
        product *= number;
        number--;
    }
    return product;
}

let a = factoriel(5);
console.log(a);
let b = factoriel(10);
console.log(b);
let c = factoriel(3);
console.log(c);