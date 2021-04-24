const sentence = 'The Sun will shine on us again';
console.log('길이 : ' + sentence.length);
console.log(sentence.slice(13)); // shine on us again
console.log(sentence.slice(13, 24)); // shine on us
console.log(sentence.slice(0)); // The sun will shine on us again
console.log(sentence.slice(0, -23)); // The sun
console.log(sentence.slice(50)); // 
console.log(sentence.slice(7, 2)); // 