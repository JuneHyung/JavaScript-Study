const str = 'JavaScript'
const strObj = new String('JavaScript')
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function () { };
const arr = [10, 200, 4000];
const obj = { a1: 'test' };
const empty = null;
const notCalled = undefined;

// typeof는 특정 원시 자료형 확인하거나, 원시 자료형과 객체형을 구분하기 위해 활용하는 것이 좋다.
console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object')
console.log(typeof notCalled === 'undefined');

console.log('-----------------------------------------------------------------------')
// instanceof는 객체를 확인하고 싶을 때 좋다. 어떤 객체인지 구분하는데 용이.
console.log(str instanceof String); // false
console.log(strObj instanceof String); // true
console.log(num instanceof Number); // false
console.log(numObj instanceof Number); // true
console.log(bool instanceof Boolean); //false
console.log(boolObj instanceof Boolean); // true
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(func instanceof Function); // true
console.log(empty instanceof Object); // false
console.log(notCalled instanceof undefined); // Error발생
