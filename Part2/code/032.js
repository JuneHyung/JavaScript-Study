// 객체 비구조화 할당
var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

// 중괄호 안에 원하는 속성명을 넣으면, obj 객체를 비구조화 하여
// 해당 속성명에 따른 값을 각 변수에 할당함.
var { a, c } = obj;

// 변수 a에 1이, c에 30이 할당.
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

// 기존 속송명의 값을 가져와 새로운 변수명으로 할당하여 정의
// :을 사이에 두고 왼쪽에 객체의 속성명, 오른쪽에 새로운 변수명.
// a에 있는 값을 newA에 할당하는데 값이 없다면(undefined) 기본값을 10으로 설정.
// f에 있는 값을 newF에 할당하는데 값이 없다면(undefined) 기본값을 5로 설정.
var { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);

console.log('**********************************************************************');

// 배열 비구조화 할당
var arr = [1, 2, 30, 44, 5];

// b에 첫번째요소, c에 두번째요소, 나머지 요소(30,44,5)가 rest에 한번에 담김.
var [b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

// 배열값[1]을 비구조화 하여 
// a에 1이 할당되고,
// 1말고는 없으므로 f에는 기본값으로 9가 할당. 
var [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) a >>> ${f}`);


// a와 f의 교체.
[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);


function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
// 중간에 4개요소를 반환받고 싶지않다면 공백으로 비워둠.
// [a,f] 였다면, a에 1, f에 2가 할당.
// 공백을 두어 a는1, f는 6번째인 6이 할당됨.
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);

// 응용 - 중간값을 비우고, 기본값 설정도 가능.
[a, , , , , , f = 7] = getArr();
console.log(`4) a >>> ${a}`);
console.log(`4) f >>> ${f}`);