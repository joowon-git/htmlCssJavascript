function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);

    if (callback) {
      callback(increased);
    }
  }, 1000)
}

// 콜백,, 자기 자신을 또 부르고 또 부르고..
// 대체품이 promise 와 async and await

// 어떻게 더 이해를 해보려 노력할 수 있을까.. 흠..
// 콜백 지옥이다..

// 기존의 값들이 바뀐다. 스택에 유지되지 않는다.
// 변경할 값을 함께 모두 감싸서 보내야 한다.
increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log('끝');
        });
      });
    });
  });
});