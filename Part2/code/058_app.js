// 058_hello.js에서 내보낸 이름으로 가져옴.
import { add, Person, version } from './058_hello.js';

const result = add(1, 2);
const harin = new Person('하린');

console.log(result);
console.log(harin.name);
console.log(version);