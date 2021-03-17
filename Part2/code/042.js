const URL = 'http://js.com';
URL = 'http://js.com'; // Assignment to constant variable.

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

//*****************************************************************
const CONST_USER = { name: 'jay', age: 30 };
console.log(CONST_USER.name, CONST_USER.age); // jay 30
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age); // jay2 31
CONST_USER = { name: 'bbo' };