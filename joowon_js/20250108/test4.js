/*
loginUser 함수를 작성하세요.
- id와 password를 매개변수로 받습니다.
- 1.5초의 지연 후 검증을 시뮬레이션합니다.
- id가 'admin'이고 password가 '1234'면 resolve로 '로그인 성공' 반환
- 그 외의 경우는 reject로 '로그인 실패' 반환
*/

function loginUser(id, password) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (id === 'admin' && password === '1234') {
        resolve('로그인 성공');
        return;
      } else {
        reject('로그인 실패');
        return;
      }

    }, 1500);
  });
}

loginUser('admin', '1234')
  .then((response) => console.log(response))
  .catch((error) => console.log(error));