function verifyNumber(n) {
    // NaN이거나 빈값이면 산술처리 불가한 값으로 인식.
    // 에러 발생을 방지하기위해 0을 리턴.
    if (!n || Number.isNaN(n)) return 0;
    return n;
}

const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined);
const num3 = verifyNumber(null); 
const num4 = verifyNumber(NaN); 
console.log(num1 + num2 + num3 + num4) // 15