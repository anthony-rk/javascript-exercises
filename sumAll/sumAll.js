const sumAll = function(num1, num2) {
    // Check if arguments are negative
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // Check if arguments are non-number type
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }

    let sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;
    }
};

module.exports = sumAll
