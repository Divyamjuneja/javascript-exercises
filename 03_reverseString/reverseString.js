const reverseString = function(input) {
    let reversedInput = "";
    let inputDup = input;

    for(let i=0;i<inputDup.length;i++){
        reversedInput += input.charAt(input.length-1);
        input = input.slice(0,input.length-1);
    }
    return reversedInput;
};

// Do not edit below this line
module.exports = reverseString;
