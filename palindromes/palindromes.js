const palindromes = function(inputString) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;

    let removePunctuation = function(string) {
      return string.replace(regex, '');
    }
      
    let reverseString = function(str) {
        return str.split('').reverse().join('');
    }

    return removePunctuation(reverseString(inputString.toLowerCase())) == removePunctuation(inputString.toLowerCase()) ? true : false;

}

module.exports = palindromes