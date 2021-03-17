function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료');

// if문에서 에러가 발생

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`에러가 발생하였습니다. >>> ${e}`);
} finally {
    console.log('완료');
}