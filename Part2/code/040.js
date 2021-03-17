hello();

function hello() {
    console.log('안녕하세요.'); // 안녕하세요가 출력
}

// ***************************************************
// 표현식을 통해 변수에 할당하여 호출.
hello2();
var hello2 = function () {
    console.log("안녕하세요");
}
// TypeError발생