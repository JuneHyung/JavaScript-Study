const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys.next().value); // one
console.log(values.next().value); // 1
console.log(entries.next().value); // ['one',1]

console.log(keys); // [Map Iterator] { 'two', 'three' }
console.log(values); // [Map Iterator] { 2, 3 }
console.log(entries); // [Map Entries] { [ 'two', 2 ], [ 'three', 3 ] }