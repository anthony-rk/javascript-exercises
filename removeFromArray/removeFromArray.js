const removeFromArray = function(array) {
    let args = Array.from(arguments);

    for (let j = 1; j < args.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === args[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
}

module.exports = removeFromArray
