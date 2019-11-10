function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.history.push('added ${num1} to ${num2} got ${result}');
    return result;
};

Calculator.prototype.substract = function(num1, num2) {
    let result = num1 - num2;
    this.history.push('substracted ${num1} from ${num2} got ${result}');
    return result;
};

Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.history.push('multiplied ${num1} with ${num2} got ${result}');
    return result;
};

Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    this.history.push('divided ${num1} by ${num2} got ${result}');
    return result;
};

Calculator.prototype.printOperations = function() {
    console.log(this.history);
};

Calculator.prototype.clearOperations = function() {
    this.history = [];
};