/*
createCountdown 함수를 작성하세요.
- 매개변수로 숫자(초)를 받습니다.
- 1초마다 숫자를 카운트다운합니다.
- 각 카운트마다 남은 시간을 콘솔에 출력합니다.
- 카운트가 0이 되면 "카운트다운 완료!"를 resolve하는 Promise를 반환합니다.
*/

function createCountdown(count) {
  let currentCount = count;
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      console.log(currentCount);

      currentCount--;

      if (currentCount < 0) {
        clearInterval(interval);
        resolve('카운트다운 완료!');
      }

    }, 1000);


  });
}

createCountdown(5)
  .then(message => console.log(message));

