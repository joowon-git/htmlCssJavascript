function add(a) {
  console.log("a+a");
  return a + a;
}

function add(a, b) {
  console.log("a+b");
  return a + b;
}

add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5, 7, 11, 299, 16, 55);


function reduceFunction() {
  const array = [5, 2, 1, 2, 3, 5,];
  return array.reduce((prev, current) => prev + current, 0);
}

console.log(reduceFunction());

function testReduce() {
  const array = [5, 2, 1, 2, 3, 5,];
  const returnSum = array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return returnSum;
}

console.log(testReduce());