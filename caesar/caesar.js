const checkIsAlpha = function(character) {
    if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
        return true;
    } else {
        return false;
    }
}

const shiftFn = function(char, num) {
    // need to check if it goes out of bounds of a-z or A-Z, and loop it back
    // to the beginning
    let asciiCode = char.charCodeAt(0);
    let newCode = 0;
    // case if is lowercase
    if (asciiCode > 96 && asciiCode < 123) {
        newCode = asciiCode + num;
        if (newCode > 122) {
            newCode -= 26;
        } else if (newCode < 95) {
            newCode += 26;
        }
    }
    // case if is uppercase (asciiCode > 64 && asciiCode < 91)
    else {
        newCode = asciiCode + num;
        if (newCode > 90) {
            newCode -= 26;
        } else if (newCode < 65) {
            newCode += 26;
        }
    }
    
    return String.fromCharCode(newCode); // convert back to alpha
}

const caesar = function(input, numShift) {
    if (numShift > 26) {
        numShift %= 26;
    }
    if (numShift < -26) {
        numShift %= 26;
    }

    let inputArray = input.split('');
    let resultArray = [];

    inputArray.forEach(element => {
        if (checkIsAlpha(element) == true) {
            resultArray.push(shiftFn(element, numShift));
            // console.log(element);
        } else {
            resultArray.push(element);
        }
    });

    return resultArray.join('');
}

let output = caesar("z Z z Z!", -27);
let output2 = caesar('Mjqqt, Btwqi!', -5)

console.log(output);
console.log(output2);

module.exports = caesar
