// 동등연산자(==)는 대상값의 자료형이 다르면 강제로 형을 바꾼뒤 비교하여 내용이 같으면 참(true)반환
// 둘다 객체형이라면 같은 메모리 주소를 바라보는지 확인.
console.log( 5 == 5); // true
console.log( "5" == 5); // true
console.log( 5 == '5'); // true

// 부등 연산자(!=)는  값이 다른 경우 참(true)반환.
// 자료형이 다르면 동등연산자와 동일하게 형변환하고 비교.
console.log( 5 != 1); // true
console.log( 5 != "1"); // true
console.log( 5 != "5"); // false

// 일치연산자(===)는 값 비교 뿐만 아니라 자료형가지 일치하는지 비교.
// 자료형을 임의로 변환하지 않음
console.log( 5 === 5); // true
console.log( 5 === "5"); // false

// 불일치연산자(!==)는 값의 불일치여부를 확인하는 연산자.
// 값의 내용이나 자료형이 다르다면 참(true) 반환.
console.log( 5 !== 10); // true
console.log( 5 !== "5"); // true