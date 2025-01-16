/*
randomNumberPromise 함수를 작성하세요.
- 1부터 10까지의 무작위 숫자를 생성합니다.
- 2초 후에 결과를 반환합니다.
- 생성된 숫자가 5보다 크면 resolve로 숫자를 반환
- 5보다 작거나 같으면 reject로 "숫자가 너무 작습니다" 메시지 반환
*/


function randomNumberPromise() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber > 5) {
        resolve(randomNumber);
      } else {
        reject("숫자가 너무 작습니다.: " + randomNumber);
      }
    }, 2000);
  })
}

randomNumberPromise()
  .then(result => console.log(result))
  .catch(reject => {
    console.log(reject);
  });