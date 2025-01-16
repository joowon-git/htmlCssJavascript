function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {

  // 방법 1
  // Promise.all 순차적으로 실행이 되지만 동시에 작업을 시작..(?)
  // const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  // console.log(result);

  // const [dog, rabbit, turtle] = await Promise.all([
  //   getDog(), getRabbit(), getTurtle()
  // ]);

  // 방법 2
  // console.log(dog);
  // console.log(rabbit);
  // console.log(turtle);

  // 방법 3   / race: 제일 빨리 도달하는(도착하는) 애 1개만 가져온다..
  const result = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(result);
}

process();