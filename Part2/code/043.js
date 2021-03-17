var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person); // 2-1
        console.log(person2); // 2-2
    }
    innerPrint(); // 2

    console.log('print finished'); // 3
}
print(); // 1
console.log('finished'); // 4