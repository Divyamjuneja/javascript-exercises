const sumAll = function(num1,num2) {
    if(num1<0 || num2 <0 || typeof num1 != 'number' || typeof num2 != 'number')
        {
        return "ERROR";
    }
    let sum=0;
    let limit = num1>num2 ? num1: num2;
    let base = num1>num2 ? num2 : num1;

    for(let i = base; i <=limit; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
