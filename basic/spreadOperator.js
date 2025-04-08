// 배열 복사, 배열 합병
const firstArray = ['a', 'b', 'c'];
const secondArray = ['d', 'e', 'f'];

const copiedArray = [...firstArray];
const mergedArray = [...copiedArray, ...secondArray];
console.log('복사된 배열:', copiedArray);
console.log('합쳐진 배열:', mergedArray);
// 객체 복사, 객체 합병
const obj = { name: 'John', age: 25 };
const anotherObj = { hobby: 'soccer' };
const copiedObj = { ...obj };

console.log(copiedObj);
console.log({ ...copiedObj, ...anotherObj });
