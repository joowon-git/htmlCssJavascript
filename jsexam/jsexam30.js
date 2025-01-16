function sleep(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

function process(func) {
  console.log('안녕하세요.');
  sleep(3000).then(() => {
    console.log('반갑습니다.');

    func();
  })
}

console.log('process 호출 전!!');

process(() => {
  console.log('프로세스가 종료되었습니다.')
});

console.log('process 호출 후!!');
// sleep은 Web API로 넘어갔고, stack이 빌 때까지 기다렸다가 then에 넘겨준 애를 resolve가 받아서 실행이 된다.