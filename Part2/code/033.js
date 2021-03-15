 // Symbol은 함수 호출을 통해 생성 가능.
const symbol = Symbol(); // new 키워드를 통한 호출을 할 경우 에러발생. (new Symbol()은 x )

// Symbol을 함수 호출 시 값을 전달할 수 있는데 이 값은 디버깅 용도이며 고유한 Symbol 값은 만들어지지않음.
// 즉, Symbol()은 늘 고유한 값을 반환.  => symbol비교하는 console은 다 false뜸.
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());

// typeof를 통해 symbol형 확인 가능.
console.log(typeof Symbol());

// 심볼형은 객체 키로 사용 가능.
// 객체 키로 사용하기 위해서는 Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때 마다 사용해야함.
const nationility = Symbol('nationility');
const user = {
    name: 'jay'
};

user[nationility] = 'korean';
console.log(user[nationility]);

// 객체 키로 사용되면 for-in루프를 통해 key를 가져올 수 없다.
for (let key in user) {
    console.log(key);
}

// Object키를 반환하는 메소드를 사용해도 가져올 수 없고, JSON 문자열로 만들 때에도 해당 키는 빠짐.
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

// 심볼을 객체 키로 사용할 때 해당 키를 가져올 방법이 없는 것은 아닙니다.
// Object.getOwnPropertySymbols 메소드를 통해 해당 객체의 키에 해당하는 심볼들을 가져올 수 있습니다.
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
