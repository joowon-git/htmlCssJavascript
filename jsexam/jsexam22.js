function hi() {
  console.log('hello!!');
}

function work() {
  setTimeout(hi, 5000); // 첫 번째 인자: 함수
}

console.log('work 시작전!!');
work();
console.log('work 실행 후!!');

setTimeout(function () {
  console.log('TEST');
}, 2000);

setTimeout(() => {
  console.log('TEST 22');
}, 0);