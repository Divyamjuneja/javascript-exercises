const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;

};

const sum = function(arr) {
    let ans=0;  
  
  for( let s of arr){
        ans += s;
    }
    return ans;
};

const multiply = function(arr) {
  let mul=1;  
  for(let a of arr){
      mul *= a;
    }
    return mul;
};

const power = function(num1,pow1) {
      return Math.pow(num1,pow1);
};

const factorial = function(num1) {
	let fact=1;
  for(let i=1;i<=num1;i++){
    fact *= i;
  }
  return fact;
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
