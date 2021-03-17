
var a = 10; // a를 전역으로 선언하고, 10 대입.
console.log(a);

function print() {
    var b = 20; // 함수 내부에서 b선언하고 20대입
    if (true) {
        var c = 30; // if문안에서 c선언하고 밖에서 출력
    }
    console.log(c); // c출력.
}

print();
console.log(b); // ReferenceError발생!
// b는 함수안에서 선언했기 때문에 접근 불가.

// ******************************************************
function print1() {
    console.log(a);
}
function print1(a) {
    console.log(a);
}
function print2() {
    var a = "local";
    print1();
}

var a = "global"

print1(); // global
print2(); // global