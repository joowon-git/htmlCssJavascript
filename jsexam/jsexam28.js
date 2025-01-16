const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(new Error());
    resolve(0);
  }, 1000);
});


myPromise.then((n) => {
  console.log(n);
})
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });