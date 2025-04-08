// 얕은 복사
// 겉모양만 복사. 내부에 있는 참조값(객체, 배열 등)은 복사하지 않고 공유함.
const original = { name: '지민', info: { age: 25 } };
const copy = { ...original };

copy.name = '윤아';
copy.info.age = 30;
// name은 문자열이라 복사 됨 (값 타입);
console.log(original.name);
// info는 객체라서 같은 참조를 공유(원본도 변경 됨) 객체의 reference(참조값)이 복사되기 때문에 같은 메모리안의 값이 공유됨
console.log(original.info.age);

// 깊은 복사
// 객체 내부까지 모두 재귀적으로 복사해서 원본과 완전히 분리된 복사본을 만듦.
// 주로 라이브러리를 많이 사용하지만 structuredClone도 쓴다.
const copied = structuredClone(original);
console.log(copied.name);
copied.info.age = 35;
console.log(original.info.age);
console.log(copied.info.age);
