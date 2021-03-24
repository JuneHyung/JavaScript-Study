// * 을 이용해 전체를 가져옴.
// 가져온 모듈 전체를 가리키는 이름이 있어야하므로 as를 사용함.
import * as add from './add.js';

// from이 없기 때문에 해당 자바스크립트만 하고 어떤것도 가져오지 않음.
// 콘솔에 hello!가 출력되고 hello라는 함수가 전역으로 선언도미.
import './sideeffect.js';

// add란 이름으로 add.js모듈을 가리키기때문에 add는 모듈 객체이고 속성으로는 default와 version
console.log(add.verson);
const added = add.default(1, 2);
console.log(added);

// 전역으로 hello가 선언 되어 함수를 실행할 수 있다.
hello('harin');
