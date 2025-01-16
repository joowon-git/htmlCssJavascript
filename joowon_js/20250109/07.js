const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const removedNumber = numbers.splice(index, 1);
console.log(`삭제된 숫자: ${removedNumber}`);
console.log(numbers);

