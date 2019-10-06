// ex. 0
function distFromAvarage(originalArray) {
    let sum = originalArray.reduce((prev, curr) => {
        return prev + curr;
    });

    let average = sum / originalArray.length;

    let results = [];

    originalArray.forEach(value => {
        results.push(value - average);
    });

    return results;
}

//ex. 1
let fruits = ['banan', 'pomarańcza', 'brzoskwinia', 'jabłko'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//ex. 3
function printArray(inArray) {
    for (let index in inArray) {
        console.log(inArray[index]);
    }
}