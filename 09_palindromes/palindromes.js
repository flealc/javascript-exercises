const palindromes = function (string) {

    string = string.replace(/[^\w\']|_/g,'').toLowerCase()
    let rev = string.split('').reverse().join('')

    return string === rev ? true : false;
}

// Do not edit below this line
module.exports = palindromes;
