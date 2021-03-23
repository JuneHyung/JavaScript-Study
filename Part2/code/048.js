// Jay선생을 객체로 표현
const teacherJay = {
    name: '제이',
    age: 30,
    // 객체를 사용
    teachJavascript: function (student) { // 학생을 매개변수로 정의함.
        student.gainExp();
    }
}

// 뽀 학생을 객체로 표현
const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function () {
        this.exp++;
    }
}

console.log(studentBbo.exp); // 0
teacherJay.teachJavascript(studentBbo);
console.log(studnetBbo.exp); // 1

/************************************************* */
// 학생의 경험치를 얻는 행위를 gainExp메소드로 작성한 원형(prototype)객체를 정의
const studentProto = {
    gainExp: function () {
        this.exp++;
    }
}

// __proto__속성에 원형 객체를 정의할 수 있습니다.
// 별도로 __proto__속성에 다른 객체를 할당하지 않으면 기본적으로 Object.prototype객체가 연결됨.
const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: "뽀",
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin); // { name: '하린', age: 10, exo: 2}
console.log(bbo); // { name: '뽀', age: 10, exo: 11}