/*
loadData 함수를 작성하세요.
- 3단계의 데이터 로딩을 시뮬레이션합니다.
- 각 단계는 1초씩 소요됩니다.
- 각 단계마다 "데이터 로딩 중... N/3" 메시지를 출력합니다.
- 모든 로딩이 완료되면 "데이터 로딩 완료!"를 resolve
*/


function loadData() {
  return new Promise((resolve, reject) => {
    let level = 1;
    const interval = setInterval(() => {
      console.log(`데이터 로딩중... ${level}/3`);

      level++;

      if (level > 3) {
        clearInterval(interval);
        return resolve('데이터 로딩 완료!');
      }
    }, 1000);
  })
}

loadData()
  .then(response => console.log(response));