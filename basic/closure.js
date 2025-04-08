// 클로저
// 외부 함수가 실행 되었을때(내부에서 접근하려면 필수!) 외부 함수의 변수를 내부 함수가 기억하고 접근할 수 있는 현상
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

// 외부 함수가 실행 되어야 접근 가능
const countUp = counter();
// 데이터 은닉 + 상태 유지
countUp(); // 1
countUp(); // 2
countUp(); // 3
