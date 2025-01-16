// 1. 재료 준비 시작...
// 2. 재료 준비 완료!

// 3. 요리 만들기 시작...
// 4. 요리 만들기 완료!

// 5. 접시에 담기 시작...
// 6. 접시에 담기 완료!

// 🎉 요리가 완성되었습니다!

// 이렇게 구현한다면??

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function prepareIngredients() {
  console.log('1. 재료 준비 시작..');
  await delay(2000);
  console.log('2. 재료 준비 완료!');
}

async function cookDish() {
  console.log('3. 요리 만들기 시작..');
  await delay(3000);
  console.log('4. 요리 만들기 완료!');
}

async function plateDish() {
  console.log('5. 접시에 담기 시작..');
  await delay(1000);
  console.log('6. 접시에 담기 완료!');
}

async function makeDish() {
  console.log('요리를 시작합니다.');
  await prepareIngredients();
  await cookDish();
  await plateDish();
  console.log('요리가 완성되었습니다!');
}

makeDish();