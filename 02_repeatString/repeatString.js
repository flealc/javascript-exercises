const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let str = '';

    for (let i = 0; i < num; i ++) {
        str = str.concat(string);
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;
