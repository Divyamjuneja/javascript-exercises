const getTheTitles = function(books) {
    let arr = new Array;
    let title;
    for(let x in books){
        title = books[x].title;
        arr.push(title);
    }
    return arr;
    
};

// Do not edit below this line
module.exports = getTheTitles;
