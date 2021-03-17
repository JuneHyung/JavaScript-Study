function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    // sum에 사용한 args가 나머지매개변수이므로 배열이라 indexOf가능.
    console.log(args.indexOf(1))
    return total;
}
// 1, 2, 3이 args배열이 되고, 배열을 순차적으로 접근하여 total을 마지막에 반환.

console.log(sum(1, 2, 3));

// 매개변수 a와 b, 그리고 나머지매개변수 others
function sum2(a, b, ...others) {
    var total = a + b;

    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2)); // 이 때 others는 빈배열이됨.
console.log(sume2(1, 2, 3, 4)); // 이 때 3과 4는 others의 요소로 전달됨.