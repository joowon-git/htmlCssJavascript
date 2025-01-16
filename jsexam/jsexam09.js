const numbers = {
  a: 1,
  b: 2,
  get sum() {
    return this.a + this.b;
  },
};

numbers.a = 5;
console.log(numbers);

console.log(numbers.sum);
