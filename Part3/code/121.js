const str = 'Java is not in Javascript';

const result1 = /java/ig.exec(str);
console.log(result1[0]); // Java
console.log(result1.index); // 0
console.log(result1.input); // Java is not in Javascript

const nums = '"1", "2", "3"';
const regex = /\d+/g;
while (result2 = regex.exec(nums)) {
    console.log(result2, regex.lastIndex); // 1, 2, 3
}