// if (true) {
//     var functionScopeValue = 'global';
//     let blockScopeValue = 'local';
// }
// console.log(functionScopeValue); // global
// console.log(blockScopeValue); // ReferenceError

let value = "바깥값";
if (true) {
    console.log(value);
    let value = "안쪽값"
}
