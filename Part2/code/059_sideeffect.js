// 외부로 내보내는 값 없이 콘솔에 출력하거나 전역객체인 window에 메소드로 hello선언.
// window에 메소드를 추가하면 window를 통하지 않고 직접 해당 메소드의 호출이 가능.
console.log('hello');
window.hello = function hello(name) {
    console.log('hello' + name);
}