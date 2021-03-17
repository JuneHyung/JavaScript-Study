let user = {};
// 속성 기술자를 통해 user객체에 age속성 정의
Object.defineProperty(user, "age", {
    get: function () { // get메소드는 속성에 접근할때 호출됨.
        return this._age;
    },
    set: function (age) { // set메소드는 속성에 값을 대입할 때 호출됨.
        if (age < 0) {
            console.error('0보다 작은 값은 올 수 없습니다.');
        } else {
            this._age = age; // _age속성에 age를 대입.
        }
    },
    enumerable: true
});
user.age = 10;
console.log(user.age);
user.age = -1;
// console.log(user.age); 값이 바뀌지않고 10이 출력됨.

let user2 = {
    // 메소드명 앞에 get set을 두어 get,set메소드를 정의할 수 있다.
    get name() {
        return this._name;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';