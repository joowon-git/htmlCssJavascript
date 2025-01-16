/*
processMessages 함수를 작성하세요.
- 문자열 배열을 매개변수로 받습니다.
- 각 메시지를 1초 간격으로 순차적으로 출력합니다.
- 모든 메시지 출력이 완료되면 "모든 메시지 처리 완료"를 resolve
*/

function processMessages(array) {
  return new Promise((resolve, reject) => {

    let index = 0;
    const interval = setInterval(() => {
      console.log(array[index]);
      index++;

      if (index === array.length) {
        resolve('모든 메시지 처리 완료');
        clearInterval(interval);
        return;
      }

    }, 1000);
  })
}



processMessages(['dog', 'cat', 'mouse', 'monkey'])
  .then(response => console.log(response));