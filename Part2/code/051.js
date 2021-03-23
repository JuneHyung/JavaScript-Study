// class의 첫글자는 대문자로 작성.
class Cart {
    // 생성자 함수.
    // ES6이전의 생성자함수와 같은 역할을 하지만 function키워드가 없고, 함수 이름이 constructor로 고정되었다고 볼수 있음.
    // 꼭 하나의 생성자만 정의할 수 있음.
    // 생성자는 new 키워드를 통해 객체가 생성될 때 마다 호출됨.
    // 생성자 함수에서는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로함.
    constructor() {
        this.store = {}; // 빈 객체 추가
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({ id: 1, name: '노트북' });
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);