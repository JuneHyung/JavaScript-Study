const arr = ["short", 'long sentence, it is not appropriate'];

console.log("배열 길이 : " + arr.length);
arr.forEach(str => {
    if (str.length < 10) console.log(str);
})