// greeting_expression변수에 함수리터럴을 할당.
var greeting_expression = function (name) {
    console.log('Hi' + name);
}
// greeting_declaration이라는 함수 이름으로 선언.
function greeting_declaration(name) {
    console.log('Hi, ' + name);
}

greeting_expression('Chloe'); 
greeting_declaration('Chloe');