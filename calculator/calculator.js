function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (sumArray) {
	return sumArray.reduce((a, b) => a + b, 0);
}

function multiply (multArray) {
	let multResult = multArray[0]; 
	for (let i = 1; i < multArray.length; i++) {
		multResult *= multArray[i];
	}
	return multResult;
}
	

function power(a, b) {
	return a ** b;
}

function factorial(input) {
	let sum = 0;

	if (input == 0 || input == 1) {
		return 1;
	} else {
		sum = 1;
		while (input > 0) {
			sum *= input;
			input--;
		}
	}
	return sum;
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}