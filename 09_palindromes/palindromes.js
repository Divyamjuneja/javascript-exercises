const palindromes = function (input) {
    const processedString = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;

};

// Do not edit below this line
module.exports = palindromes;
