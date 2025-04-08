// 고차 함수
const arr = [1, 2, 3];
// 1. forEach
// 반복만 하고 반환값이 없음
arr.forEach((num) => console.log(num));
// 2. map
// 배열을 변형해 새로운 배열을 생성하고 원본을 유지한다.
const newArr = arr.map((num) => num * 2);
console.log(newArr);
// 3. filter
// 조건을 만족하는 요소를 추출해 새로운 배열을 생성한다.
const odd = arr.filter((num) => num % 2 === 1); // 홀수만 필터링
console.log(odd);
// 4. reduce
// 누적된 값을 계산하거나, 배열을 다른 구조로 변환
const sum = arr.reduce((acc, cur) => acc + cur);
console.log(sum);
