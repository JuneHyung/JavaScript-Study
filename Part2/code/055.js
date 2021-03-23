// 즉각호출패턴 (function(){//코드})();
var namespaceA = (function () {
    var privateVariable = '비공개 변수'; // 함수 안에서만 접근이 가능하기 때문에 비공개 영역이됩니다.
    // 반환된 객체는 namespaceA에 할당되고, 외부에서 접근이 가능하기 때문에 해당 객체의 속성과 메소드들은 공개 API가됨.
    return {
        publicApi: function () {
            console.log(privateVariable + '를 접근할 수 없습니다.');
        }
    }
})();

namespaceA.publicApi();