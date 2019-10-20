
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//ex. 0
function checkArray(inArrays) {
    let result = [], i;

    inArrays.forEach(numbers => {
        for (i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                result.push(false);
                return;
            }
        }

        result.push(true);
    });

    return result;
}