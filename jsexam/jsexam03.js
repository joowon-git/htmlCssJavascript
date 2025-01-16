// 자바스크립트는 함수를 [일급객체]로 취급한다.
// 함수는 하나의 타입이 될 수 있다. 객체처럼 취급해 준다. 매개변수로, 변수로 사용할 수 있다.

function test() {
  console.log("TEST");
  return 19;
}

let a = test();

let b = test;

console.log(a);
console.log(b);

b();

// 자바스크립크는 함수를 일급객체로 취급한다.
function sum(test) {
  test();
}


