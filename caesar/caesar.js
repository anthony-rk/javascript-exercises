const checkIsAlpha = function(character) {
    if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
        return true;
    } else {
        return false;
    }
}

const shiftFn = function(char, num) {
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
        } else {
            resultArray.push(element);
        }
    });

    return resultArray.join('');
}

module.exports = caesar
