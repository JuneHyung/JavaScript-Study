const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify('Kiss Carnival'),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2007])
}

for (let key in testStringify) {
    console.log(`--------------${key}--------------`);
    console.log(typeof testStringify[key]); // string
    console.log(testStringify[key]); // 값들이 출력
}
console.log(`--------------stringifyObj--------------`);
const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki', 'matsumoto jun'],
    character: ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj)); // string
console.log(JSON.stringify(obj)); // 전체 출력
console.log(JSON.stringify(obj, ['drama', 'season'])); // drama, season출력
console.log(JSON.stringify(obj, null, 4)); // 앞에 4개공백
console.log(JSON.stringify(obj, (key, val) => { // season이 2003으로 변경됨.
    if (key === 'season') return 2003;
    return val
}, 4));
console.log(JSON.stringify(obj, null, 4)); // 앞에 4개공백