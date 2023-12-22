const fibonacci = function(input) {
    let num1=0;
    let num2=1;
    let sum=0;
    let convertedInput = parseInt(input);
    if(convertedInput ==0) return convertedInput;
    else if(convertedInput <0) return "OOPS";    
    for(let i=2;i<=input;i++){
        sum =num1+num2;         //  i=1,2 , sum = 1,  
        num1 =num2;
        num2 = sum;

    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
