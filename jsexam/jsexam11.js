for (let i = 0; i < 10; i++) {
  console.log(i);
}


const dog = {
  name: '멍멍이',
  age: 2,
  sound: '멍멍!!'
}

for (let key in dog) {
  console.log(dog[key]);
}

let i = 0;

while (i < 30) {
  console.log(i);
  i++;
}

const names = ['happy', 'July', 'Marry', 'Harry'];

for (let name of names) {
  console.log(name);
}

console.log(Object.entries(dog));
console.log(Object.keys(dog));
console.log(Object.values(dog));


const sumFunction = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let array = [];
for (let i = 0; i < 15; i++) {
  array.push(i);
}

console.log(sumFunction(array));
