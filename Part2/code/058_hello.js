// const키워드 version이름으로 상수를 정의하였습니다.
// export키워드로 정의된 상수의 이름인 version을 내보냄.
export const version = 'v1.0';

// personA이름으로 정의된 변수에 객체를 할당하였습니다.
// 또한 personA로 내보냄.
export var personA = {
    name: 'a'
};

// add함수를 선언하고 선언도니 함수의 이름으로 내보냄.
export function add(a, b) {
    return a + b;
}

// Person클래스를 선언하고 선언된 함수의 이름으로 내보냄.
export class Person {
    constructor(name) {
        this.name = name;
    }
}