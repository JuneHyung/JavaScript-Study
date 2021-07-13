const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2-3})$/i;

console.log(numRegExp.test(12345)); // T
console.log(numRegExp.test('test')); // F

console.log(phoneRegExp.test('010-7917-2614')); // T
console.log(phoneRegExp.test('02-8844-1234')); //F

console.log(emailRegExp.test('test123@javascript.org')); // F
console.log(emailRegExp.test('test-javascript')); //F

