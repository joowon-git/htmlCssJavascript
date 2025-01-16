const array1 = [3];

array1.push(() => console.log("hello array!"));
console.log(array1);

array1[1]();

console.log(array1.pop());
console.log(array1);