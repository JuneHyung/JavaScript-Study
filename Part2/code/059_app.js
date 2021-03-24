// 059_app.js
// as키워드를 사용하여 현재 모듈에서 다른이름으로 사용.
import {version as moduleVersion} from './059_version.js'

// 상수를 이미 선언했기 때문에 version.js에서 내보낸 이름으로 version을 가져올 수 없다.
// 그래서 moduleVersion으로 바꿔서 들고옴
const version = 'v0';
console.log(moduleVersion); // version.js의 version값이 나옴.