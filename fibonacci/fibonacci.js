const fibonacci = function(index) {
    // calculate the fibonacci array until the index
    // return the final entry, aka the index
    let fibonacciArray = [1, 1];
    let nextInSequence = 0;

    if (index == 0 || index == 1) {
        return 1; 
    } 
    else if (index < 0) {
        return "OOPS";
    } 
    else {
        for (let i = 2; i < index; i++) {
            nextInSequence = (fibonacciArray[i - 1] + fibonacciArray[i - 2]);
            fibonacciArray.push(nextInSequence);
        }   
        return fibonacciArray[fibonacciArray.length - 1];
    }
}

module.exports = fibonacci
