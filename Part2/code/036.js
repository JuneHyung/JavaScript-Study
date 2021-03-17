function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]; // arguments객체를 통해 전달된 인자의 합을 반환.
    }
    // instanceof를 통해 arguments객체가 배열이 아님을 알 수 잇다.
    console.log(arguments instanceof Array); // false
    return total;
}

var sumOf1to3 = sum(1, 2, 3); // sum은 매개변수를 정의 하지 않았지만 전달인자로 1,2,3을 받음. 에러발생안함.
console.log(sumOf1to3);

function testArg() {
    // arguments객체를 배열로 바꾸기 위해 배열의 프로토타입에 정의된 slice메소드 호출.
    // arguemtns객체의 요소들을 복사하는 새로운 배열이 만들어짐.
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b')); // 배열이라 indexOf메소드를 사용해 b의 인덱스를 반환
    console.log(arguments.indexOf('b')); // arguments객체는 배열이 아니기 때문에 에러발생
}

testArg('a', 'b');