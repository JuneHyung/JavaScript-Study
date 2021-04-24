
console.log(Number.isNaN(NaN)); // ture
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN('Is it Number?')); // false
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(null)); // false


console.log(Number.isNaN(-1)); // false
console.log(Number.isNaN(0/0)); // true
console.log(Number.isNaN(new Date())); // false
console.log(Number.isNaN(new Date().toString())); // false
console.log(Number.isNaN('Infinity')); // false