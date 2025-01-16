const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((prev, curr, index, array) => {
    if (index === array.length - 1) {
        return (prev + curr) / array.length;
    }
    return prev + curr;
}, 0);

console.log(sum);