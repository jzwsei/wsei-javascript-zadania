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