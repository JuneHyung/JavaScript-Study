const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeCaseRegex = /([a-f])\w+/i;
const findAllRangeCaseRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex)); // [ 'to' , index : 29, input : ~~, groups: ~~] 
console.log(str.match(ignoreAllCaseRegex)); // [ 'To', 'to' ]
console.log(str.match(findRangeCaseRegex)); // 'ath'
console.log(str.match(findAllRangeCaseRegex)); // [ 'ath', 'ay', 'find', 'at', 'ath' ]