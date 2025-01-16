async function getData() {
  // 더미데이터 제공 웹 사이트
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}

getData();


const pageStart = async () => {
  console.log('사용자가 페이지에 접속했습니다.');
  await getData();
  console.log('페이지에 게시물을 모두 불러왔습니다.');
}

pageStart();