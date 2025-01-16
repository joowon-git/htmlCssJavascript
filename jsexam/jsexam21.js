function work() {
  console.log('work Function started --');
  const start = Date.now();
  // for (let i = 0; i < 10000000000; i++) { }
  for (let i = 0; i < 10000000000; i++) { }
  const end = Date.now();
  console.log(`${end - start} ms`);
}

console.log('start!!');
work();
console.log('end...');