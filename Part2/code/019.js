var value = null;
console.log(value); // null
// typeof는 자료형을 확인할 때 object(객체)를 반환
// null을 객체형이라 오해하지 않기.
console.log(typeof value); // object
var value;
console.log(value); // null
console.log(typeof value); // object

console.log(null == undefined); // true
console.log(null === undefined); // false