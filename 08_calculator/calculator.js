const add = function(x,y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {

	return arr.reduce((val1,val2) => add(val1,val2), 0);
};

const multiply = function(arr) {
    return arr.reduce((val1,val2) => val1 * val2, 1);
};

const power = function(x,y) {
    return Math.pow(x,y);
};

const factorial = function(x) {
    return (x === 0) ? 1 : x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
