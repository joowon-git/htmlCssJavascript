/*
다음 API 호출을 시뮬레이션하는 async 함수들을 만드세요:
- fetchUser(id): ID로 사용자 정보 조회 (1초 소요)
- fetchUserPosts(userId): 사용자의 게시물 조회 (1.5초 소요)
- fetchPostComments(postId): 게시물의 댓글 조회 (1초 소요)

async function getUserInfo(id) 를 구현하여
특정 사용자의 정보, 첫 번째 게시물, 그 게시물의 댓글을 모두 조회하세요.
각 단계별 데이터를 콘솔에 출력하세요.
*/

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${id}로 사용자 정보를 조회합니다.`);
      resolve(true);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${userId}로 사용자의 게시물을 조회합니다.`);
      resolve(15);
    }, 1500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${postId} 게시물의 댓글을 조회합니다.`);
      resolve(true);
    }, 1000);
  });
}

async function getUserInfo(id) {
  await fetchUser(id);
  const postId = await fetchUserPosts(id);
  await fetchPostComments(postId);
  console.log(`${id} 사용자의 게시물과 댓글 조회를 완료했습니다.`);

}

getUserInfo(125);