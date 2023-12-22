const findTheOldest = function(people) {
    return people.reduce((accumulator,currentValue) =>{
        if (!accumulator.yearOfDeath){
            accumulator.yearOfDeath = new Date().getFullYear();
        }
        let accumulatedAge = accumulator.yearOfDeath - accumulator.yearOfBirth; //28
        let currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth;   //49
       
        console.log(accumulatedAge,currentAge);
        return (currentAge>accumulatedAge) ? currentValue: accumulator;
  },people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
