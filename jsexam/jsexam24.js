function work(callback) {
  console.log('work start!!');
  setTimeout(() => {
    console.log('work 작업 완료!!');
    callback();
  }, 0)

}



console.log('start !! ');
work(() => {
  console.log('work end!!');
});
console.log('next work!!');;

console.log('end!!');
// stack에 work가  불리고, web API로 setTimeout이 실행된 후에 콜백 큐에 올라간 콜백 함수(인자)가 실행된다.

setInterval(() => {
  console.log('hi');
}, 1000)