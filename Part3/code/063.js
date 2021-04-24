console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-1)); // ture
console.log(Number.isInteger(7777777777777777777777777777)); // true
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(0/0)); // false
console.log(Number.isInteger('Infinity')); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger({})); // false

function verifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
}

const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3); // 15 0 0