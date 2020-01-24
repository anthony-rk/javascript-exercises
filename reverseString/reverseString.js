const reverseString = function(phrase) {
	// Check if input is valid
	if (!phrase || phrase.length < 2 || typeof phrase != 'string') {
		return "Not Valid";
	}

    const revArray = [];
    for (let i = phrase.length - 1; i >= 0; i--) {
        revArray.push(phrase[i]);
    }
    return revArray.join("");;
}

module.exports = reverseString
