function Storage() {
    // 내부속성으로 dataSource를 가지고 빈객체를 할당
    this.dataStore = {};
}

Storage.prototype.put = function (key, data) {
    // 주어진 키에 dataSource속성을 할당.
    this.dataStore[key] = data;
}

Storage.prototype.getData = function (key) {
    // 매개변수의 값을 키로 해서 dataStore 속성에서 찾아 반환
    return this.dataStore[key];
}

// Storage타입의 인스턴스를 생성하면 인스턴스는 해당 생성자 함수의 프로토타입을 상속함.
// Storage 생성자 함수의 프로토타입에 정의된 메소드들을 해당 인스턴스들은 사용가능.
const productStorage = new Storage();
productStorage.put('1d001', { name: '키보드', price: 2000 });
console.log(productStorage.getData('1d001'));


// RemoveableStorage생성자 함수를 정의
// storage함수를 호출하면서 this를 전달하는데
// => Storage생성자 함수가 호출되면서 RemoveableStorage 생성자 함수의 this에 Storage함수에서 정의한대로 dataStore가 속성으로 추가됨.
function RemovableStorage() {
    Storage.call(this);
}


// Object.create메소드는 주어진 인자를 __proto__에 연결한 새로운 객체를 반환함.
// RemovableStorag.prototype에 Object.create(Storage.prototype)를 할당하면 Storage함수의 프로토타입 객체가 RemovableStorage함수의 프로토타입 객체의 __proto__에 할당됨.
// 두 프로토타입이 상속관계를 형성.
// RemoveableStorage생성자 함수의 프로토타입 객체에 removeAll메소드를 추가함.
RemovableStorage.prototype = Object.create(Storage.prototype);

RemovableStorage.prototype.removeAll = function () {
    this.dataStore = {}
}

// RemovableStorage 생성자 함수에 의해 만들어진 인스턴스들은 내부에 없는 메소드를 Removable 생성자 함수의 프로토타입에서 먼저찾고,
// 없으면 Storage 생성자 함수의 프로토타입에서 찾게됨.
// 나아가 Object.prototype에서까지 찾게됨.

// 이렇게 프로토타입 객체가 서로 연결되어 있다하여 프로토타입 체인이라고도 합니다.
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', { name: '키보드', price: 2000 });
productStorage2.removeAll();

const item2 = productStorage2.getData('id001');
console.log(item2);