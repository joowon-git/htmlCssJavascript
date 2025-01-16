const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((prev, curr) => prev + curr, 0);

console.log(sum);


let sumV2 = numbers.reduce((prev, curr) => {
    console.log({ prev, curr });
    return prev + curr;
}, 0);

console.log(sumV2);