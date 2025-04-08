//조건문
//switch: 어떤 값이 정확히 어떤 case인지 검사
console.log('조건문 switch');
const condition = 5;
const arr = ['a', 'b', 'c'];
const objArr = [
  { name: 'John', age: 12 },
  { name: 'Smith', age: 13 },
];
let newArr = [];

switch (condition) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log('4 이상 입니다.');
}

//반복문
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// for...of 배열 순회
console.log('배열 순회');
for (const item of arr) {
  newArr.push(item + 'na');
}
console.log(newArr);
// for...in 객체 순회
console.log('객체 순회');
for (const item of objArr) {
  for (const key in item) {
    console.log(`키:${key} 값:${item[key]}`);
  }
}
