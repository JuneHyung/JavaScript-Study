import Hello from './057.js'; 
// default로 내보낸 값을 가져오고, import하는 모듈에서 이름을 부여함.(여기서는 Hello로 부여)

// 057.js에서는 클래스를 기본값으로 내보냈기 때문에 new키워드를 사용하여 객체를 생성
const koreanHi = new Hello('안녕하세요');
koreanHi.hi('하린');