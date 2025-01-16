//자바스크립트의 함수는 오버로딩이 되지 않아요.

function add(a) {
  console.log("a+a");
  return a + a;
}

function add(a, b) {
  console.log("a+b");
  return a + b;
}

// console.log(add(3));

add(22, 3);
add(22, 3, 4);
add(22, 3, 5, 6, 6, 7, 7, 9);

function add(a, b, c) {
  console.log(arguments.length);
  console.log(arguments[0]);
}
