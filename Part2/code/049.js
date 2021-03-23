// Teacher생성자 함수를 정의함.
// 전달받은 매개변수들의 값을 this를 사용해 대입함.
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르칩니다.');
    };
}
// new키워드와 함께 생성자 함수를 호출하면 생성자 함수 블록이 실행되고 별도의 return문이 없어도 새로운 객체가 반환됨.
// 이때 반환되는 새로운 객체를 가리키는 것이 this
const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay); // Teacher타입의 객체를 출력.
jay.teach('bbo'); // 해당 객체의 teach메소드를 호출

// 모든 객체는 constructor속성을 가집니다.
// 이때 생성자 함수의 this는 전역 객체를 가리키게 됩니다.
console.log(jay.constructor); // jay객체의 constructor속성은 Teachr 생성자 함수를 가리킴.
console.log(jay instanceof Teacher); // jay객체가 Teacher생성자 함수의 인스턴스 여부를 확인.

// new를 빼고 Teacher생성자함수를 호출.
// 이 때 생성자함수의 this는 전역객체를 가리킴.
const jay2 = Teacher('jay', 30, 'Javascript');
console.log(jay2); // 새로운 객체가 반환되지 않아 jay2는 undefined
console.log(age); // 전역변수의 age