// 브라우저 환경에서 this를 전역에서 사용하면 전역객체인 Window객체르 ㄹ가리킴.

this.valueA = 'a';
console.log(valueA); // window.valueA
valueB = 'b';
console.log(this.valueB); // 

// 함수에서 this를 사용하고 함수를 호출하면 this는 전역 객체인 Window를 가리킴.
// 함수 내의 코드를 엄격한 모드로 실행하게 되면 this는 undefined가 됩니다.
function checkThis() {
    console.log(this);
}

function checkThis2() {
    "use strict"; // 엄격한 모드 실행.
    console.log(this);
}

checkThis();
checkThis2();


// Product함수는 생성자 함수로 작성되었습니다.
// new키워드없이 호출되면 this는 전역객체 Window를 가리킴.
// new 키워드를 사용해야지만 this는 프로토타입 객체와 연결된 객체가 반환됨.
function Product(name, price) {
    this.name = name;
    this.price = price;
}


const product1 = Product('가방', 2000);
console.log(window.name);
console.log(window.price);

const product2 = {
    name: '가방2',
    price: 3000,
    getVAT() {
        return this.price / 10;
    }
}

const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);


// 메소드안에서 this를 선언했지만, 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면
// 일반적인 함수 호출이 되어 this는 전역 객체를 가리킴.
// 즉, 호출하는 시점에 점(.)연산자와 함께 객체가 주어져야 메소드 안의 this가 호출의 주제인 객체가 됩니다.
const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);


// this는 bind메소드를 통해 전달한 인자값으로 변경할 수 있다.
// call과 apply메소드 또한 this가 가리키는 값을 변경할 수 있다.
const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

// 중첩함수로 함수가 작성 됐을 때 내부함수의 this는 전역 객체를 가리킴.
// 1초뒤 this.count는 window.count로 해석되어 undefined+1 = NaN이 됨.
const counter1 = {
    count: 0,
    addAfterSec() {
        setTimeout(function () {
            this.count += 1;
            console.log(this.count);
        }, 1000);
    }
};
counter1.addAfterSec();

// 화살표 함수에서 this를 사용하면 this는 부모 환경의 this를 가리킴.
// 그래서 중첩된 함수로 작성 되었을 때 화살표함수를 사용하면 부모함수의 this와 같다.
const counter2 = {
    count: 0,
    addAfterSec() {
        setTimeout(() => {
            this.count += 1;
            console.log(this.count);
        }, 1000);
    }
};
counter2.addAfter1Sec();