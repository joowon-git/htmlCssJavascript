function sleep(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (error) {
    console.error(error);
  }

}

console.log('process 호출 전!!');

process();

console.log('process 호출 후!!');
