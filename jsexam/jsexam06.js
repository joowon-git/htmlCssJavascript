// { } 객체
const obj = {};

console.log(typeof obj);

const dog = { name: '멍멍이', age: 2 };

console.log(dog.name);
console.log(dog.age);
console.log(dog['name']);


const person = {
  name: 'joowon',
  age: 19,
  hobby: 'movie',
  run: function () {
    console.log('joowon ru...run.....!!!!!!');
  }
}

console.log(person.name);
person.run();