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

//ex. 4
function multiply(numbers) {
    let result = 1, 
        i;

    for (i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }

    return result;
}

//ex. 5
function getEvenAvarage(numbers) {
    let numbersSum = 0,
        numbersCount = 0;
        
    numbers.forEach(function(number) {
        if (number % 2 !== 0) {
            return;
        }

        numbersSum += number;
        numbersCount++;
    });

    if (numbersCount === 0) {
        return null;
    }

    return numbersSum / numbersCount;
}