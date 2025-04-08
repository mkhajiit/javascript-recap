/*
 * 비동기 처리(Asynchronous Processing)는 작업이 즉시 완료되지 않고,
 * 백그라운드에서 실행되며 완료 시점에 결과를 처리하는 방식입니다.
 * 이는 코드 실행이 블로킹되지 않도록 하여 효율적인 작업 처리를 가능하게 합니다.
 * 예를 들어, 네트워크 요청, 파일 읽기/쓰기, 타이머 등이 비동기적으로 처리될 수 있습니다.
 *
 * 비동기 처리는 주로 콜백 함수, 프로미스(Promise), 또는 async/await 구문을 통해 구현됩니다.
 * - 콜백 함수: 작업 완료 후 호출되는 함수
 * - 프로미스: 작업의 성공 또는 실패를 나타내는 객체
 * - async/await: 비동기 코드를 동기 코드처럼 작성할 수 있게 해주는 구문
 */

// 1. 콜백 함수
function work(callback) {
  setTimeout(() => {
    console.log('작업 완료!');
    callback();
  }, 2000); // 2초 후 실행
}

work(() => {
  console.log('다음작업');
});

// 2. Promise
// then 체이닝: 앞에서 return된 값을 매개변수로 사용해서 체이닝
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('데이터 수신');
      resolve('user123'); // 수신 성공, 실패는 reject()
    }, 1000);
  });
}

fetchData()
  .then((userId) => {
    console.log('유저 ID:', userId);
    return userId + '@mail.com';
  })
  .then((email) => {
    console.log('유저 email:', email);
  });

// catch 에러 처리
fetchData()
  .then((res) => {
    // throw new Error('에러 발생');
  })
  .then((err) => {
    console.log('에러 처리:', err);
  })
  .finally(() => {
    console.log('나는 무조건 실행이 되는 finally입니다.');
  });

async function main() {
  console.log('요청시작');
  const result = await fetchData();
  console.log(result);
  console.log('처리완료!');
}

main();
