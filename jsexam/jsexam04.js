hello();


function hello() {
  console.log("hello");
}

function hello() {
  console.log("hi");
}

// const func1 = function () {
const func1 = function () {
  console.log("function func1 hello");
};

console.log('---');
var a = func1;
a();


//화살표 함수 (매개변수들,,) => 구현부
const func2 = () => console.log('function hello!!');

func2();

const sum3 = (a, b) => a + b;

const hi = name => console.log(`${name} 안녕!!`);

console.log(sum3(10, 5));
hi('joowon');