/*
 * 기본적인 this의 규칙:
 * 1. 전역 컨텍스트에서 this는 전역 객체를 참조합니다. (브라우저에서는 window, Node.js에서는 global)
 * 2. 객체 메서드에서 this는 해당 메서드를 호출한 객체를 참조합니다.*(중요!)
 * 3. 생성자 함수 또는 클래스에서 this는 새로 생성된 인스턴스를 참조합니다.
 * 4. 화살표 함수에서 this는 자신을 포함하는 외부 함수 또는 컨텍스트의 this를 상속받습니다.*(중요!)
 * 화살표 함수의 this는 "자신이 선언된 위치"의 this를 "그대로 물려받는다".
 * 5. 명시적으로 this를 설정하려면 call, apply, bind 메서드를 사용할 수 있습니다.
 * 6. 일반 함수에서의 this는 호출한 주체에 따라 달라집니다.
 */

console.log('객체');
const obj = {
  name: 'Alice',
  // window or undefined 참조
  allowFunc: () => {
    console.log('arrow:', this.name);
  },
  // 객체 참조
  regularFunc() {
    console.log('regular:', this.name);
  },
};

obj.allowFunc();
obj.regularFunc();

console.log('클래스');
class Person {
  constructor(name) {
    this.name = name;
  }

  speak = () => {
    console.log(`내이름은 ${this.name}`);
  };
}

const p = new Person('Alice');
p.speak();

//bind
function sayHello() {
  console.log(`안녕, 나는 ${this.name}이야`);
}
const user = { name: '지민' };
// this를 user로 고정
const boundHello = sayHello.bind(user);
boundHello();
// call this를 바꾸고 바로 실행, 추가 인자 전달도 가능함
function greet(greeting) {
  console.log(`${greeting}, 나는 ${this.name}입니다.`);
}
greet.call(user, '안녕하세요!');
