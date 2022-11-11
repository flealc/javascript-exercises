const removeFromArray = function(arr) {
    let args = arguments

    if (arr === undefined) return arr;

    if (args.length === 1) return arr;

    for (let i = 1; i < args.length; i++) {
        let index = arr.indexOf(args[i]);
        if (index >= 0) {
            arr.splice(index, 1);
        }

    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
