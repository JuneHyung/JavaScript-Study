var obj = {};
for (var i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile]: true, // 7라인에서 정의한 profile문자열을 키값으로하는 속성 정의

    // 문자열 ':'을 중심으로 profile문자열을 split로 나누고,
    // 나눠진 부분중 왼쪽 문자열 chloe를 key로 
    // 오른쪽의 30을 값으로 person에 속성추가.
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);