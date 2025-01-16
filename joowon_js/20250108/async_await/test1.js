/*
- 파일 처리를 시뮬레이션하는 함수들을 만드세요
- readFile(fileName): 파일 읽기를 시뮬레이션 (2초 소요)
- processFile(content): 파일 처리를 시뮬레이션 (1.5초 소요)
- saveFile(processedContent): 파일 저장을 시뮬레이션 (1초 소요)

async function handleFile(fileName) 을 구현하여
위 세 함수를 순차적으로 실행하고 각 단계별 결과를 콘솔에 출력하세요.
파일명이 '.txt'로 끝나지 않으면 에러를 throw 하세요.
*/

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fileName.endsWith('.txt')) {
        const error = new Error();
        error.name = `${fileName} 확장자 오류입니다.`;
        reject(error);
      }
      const response = {
        message: `${fileName} 파일을 읽고 있습니다.`,
        content: `${fileName} 파일 내용: 이러쿵 저러쿵 자바스크립트`,
      }

      resolve(response);
    }, 2000);
  })
}

function processFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`파일의 ${content} [내용] 처리 중입니다.`);
      resolve(content);
    }, 1500);
  });
}

function saveFile(processedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('파일을 저장합니다.');
    }, 1000);
  });
}


async function handleFile(fileName) {

  try {
    const readResult = await readFile(fileName);
    console.log(readResult.message);
    const processContent = await processFile(readResult.content);
    const saveResult = await saveFile(processContent);
    console.log(saveResult);
    console.log('파일 저장을 완료하였습니다.');
  } catch (e) {
    console.log(e);
  }
}

handleFile('test.txt33');
handleFile('hello.txt');