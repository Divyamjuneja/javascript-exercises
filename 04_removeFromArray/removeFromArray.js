const removeFromArray = function(arr, ...number) {
    return arr.filter(val => !number.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
