const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1); // 4번인덱스 부터 1개삭제 >> juice 삭제
console.log(fruits);

fruits.splice(4, 0, 'grape'); // 4번인덱스에 0개 삭제 후 grape 삽입
console.log(fruits);

fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon'); // 2번 인덱스에 1개삭제 후 그 자리부터 mandarin,... 삽입
console.log(fruits);