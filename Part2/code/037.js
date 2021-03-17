// drawChart를 정의할 때 매개변수로 width,height를 선언.
// 전달인자가 없으면 기본으로 200과 400이 할당됨.
function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height}차트를 그립니다.`);
}
drawChart(100); // width에는 100이 핟랑되지만 height는 전달값이없어 400이 핟랑.
drawChart();

// drawChart2를 정의할 때 매개변수로 width,height를 선언.
// 전달인자가 없으면 기본으로 200과 200/2 = 100이 할당됨.
function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} X ${height}차트를 그립니다. `);
}
drawChart2(300);
drawChart2();