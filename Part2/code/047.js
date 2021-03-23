// x를 전달 받아 x + x결과를 반환.
const double = x => x + x;
console.log(double(2));

// a와 b를 받아 a+b를 리턴
const add = (a, b) => a + b;
console.log(add(1, 2));

// 아무런 매개변수를 정의하지 않았기 때문에 괄호로 빈 매개변수 표현.
// arguments 객체를 콘솔에 출력. return이 없기 때문에 반환값은 없음.
const printArguments = () => {
    console.log(arguments);
}

// 1,2,3을 전달하면서 정의된 화살표 함수를 호출하지만, Uncaught Reference에러가 발생.
// 화살표함수는 기본함수와 다르게 argument객체가 만들어지지 않는다.
printArguments(1, 2, 3);

// args는 전달받은 인자목록을 배열로 사용할 수 있다.
// 코드블록에 대괄호를 썻기 때문에 return문을 작성해 반환값 명시
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3));

// 화살표함수도 함수의 인자로 전달이 가능.
// setTimeout함수의 인자로 화살표 함수가 전달되고, 이때 매개변수가 없어 괄호를 작성해줌.
setTimeout(() => {
    console.log('화살표 함수!');
}, 10);