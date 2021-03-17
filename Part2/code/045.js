let user = {
    name: "jeado"
};

// Object.getOwnPropertyDescriptor를 통해 속성 기술자 객체를 가지고 옴.
let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); 
console.log(descriptor);

let user2 = {};
// Object.defineProperty를 통해 객체 속성을 정의
Object.defineProperty(user2, "name", { 
    value: "jaedo",
    enumerable: true,
    configurable: true,
    writable: false
});

console.log(user2.name);
user2.name = "bbo"; // writable: false라서 바뀌지않고, 기존값이 출력
console.log(user2.name);

let user3 = {
    name: "jaedo",
    toString() {
        return this.name;
    }
};

// toString메소드로 정의하고 속성기술자를 통해 enumerable을 false로 재정의
Object.defineProperty(user3, "toString", {
    enumerable: false
});

// for-in루프로 모든 속성에 접근하여 속성이름을 콘솔에 출력.
// 그러나 enumerable: false로 정의해서 출력되지 않음.
for (let key in user3) {
    console.log(key);
}


let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jaedo",
    configurable: false
});
// configurable이 false라서 delete를 통해 지우려해도 지워지지 않고 false가 리턴.
delete user4.name
console.log(user4);

// 새로 재정의 하려 해도 configurable이 false이기 때문에 에러가 발생.
Object.defineProperty(user4, "name", {
    writable: true
});