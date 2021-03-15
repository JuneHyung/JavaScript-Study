var condition = 5 > 10; // false
condition ? console.log('left') : console.log('Right'); // false이므로 Right출력

var result = condition ? (
    // console.log가 실행되고, 변수 result에 표현식2가 저장됨.
	console.log("삼항 연산식의 첫번째 표현식 입니다."), "표현식1"
) : (
	console.log("삼항 연산식의 두번쨰 표현식 입니다."), "표현식2"
);
// contion이 false이므로 두번째 표현식이 출력됨.
console.log(result)