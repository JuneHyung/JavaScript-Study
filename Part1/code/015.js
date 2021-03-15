var hometown = [
    {name: '진', place: '과천'},
    {name: '남준', place: '일산', city: '고양'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'},
];

var isHometown = function (h, name) { // 인자 h와 name받음
    
    // `(백틱)을 사용해 h의 city출력함.
    console.log(`함수가 실행되었습니다. ${h.city}도시에서 ${name}을 찾습니다`);

    // h의 name과 name이 다른경우
    if (h.name === name) {
        // `(백틱)을 사용해 h의 name, city, place를 출력.
        console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }
    return false;
}

var h;
// shift()는 배열의 앞에서부터 값을 하나씩 빼오는 ㅎ마수.
// 예를 들어 [1,2]배열에서 shift()가 실행되어 1이 방출되면, 해당 배열은 2가됨.
while (h = hometown.shift()) {
    
    if (!h.name || !h.place || !h.city) continue; // {name: '진', place: '과천'}는 place가 없어 continue

    var result = isHometown(h, '호석');
    if (result) break;
}

var i = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];
do {
    hometown[i] = { name: names[i], city: cities[i] };
    i++;
} while (i < 4);

console.log(hometown);