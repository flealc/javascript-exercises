const fibonacci = function(position, number = 1, previous = 0) {
    position = parseInt(position);
    if (position <= 0) return "OOPS"
    if (position === 1) return number;
    return fibonacci(position - 1, number + previous, number)
};

// Do not edit below this line
module.exports = fibonacci;
