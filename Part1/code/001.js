document.createElement('div'); // div 엘리먼트를 생성

var element_div = document.createElement('div'); // 변수 값이 아닌, undefined가 출력됨.
// 브라우저 내부 메모리에 변수 div를 저장했기 때문.

element_div.id = 'div_name'; // div_name이 출력됨.