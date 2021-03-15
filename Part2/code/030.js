// 각 속성의 키이름을 변수명으로 정의하고, 값을 해당 변수에 할당.
// 변수 address, members, addFamily, getHeadcount에 해당하는 속성값이 할당됨.

var address = 'Seoul';
var members = {};
var addFamily = function (age, name, role) {
    // {변수명}으로 정의한 객체는 {변수명: 변수값}으로 정의된 것과 동일.
    // 단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용이 가능.
    this.members[role] = { age, name };
};

var getHeadcount = function () {
    return Object.keys(this.members).length;
};

// 각 변수명에 해당하는 변수(위에서 선언한)들이 family에 들어가게됨.
var family = { address, members, addFamily, getHeadcount };

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.getHeadcount());