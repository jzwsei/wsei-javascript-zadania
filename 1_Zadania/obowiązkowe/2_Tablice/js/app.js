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

//ex. 6
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b)
}

//ex. 7
function addArrays(array1, array2) {
    let result = [],
        maxCounter = array1.length >= array2.length ? array1.length : array2.length,
        i, value1, value2;

    for (i = 0; i < maxCounter; i++) {
        value1 = array1[i];
        value2 = array2[i];

        if (value1 !== undefined && value2 != undefined) {
            result.push(value1 + value2);
        } else if (value1 !== undefined) {
            result.push(value1);
        } else {
            result.push(value2);
        }
    }

    return result;
}