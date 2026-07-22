const removeFromArray = function(arr, ...args) {
    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let alert = false;
        for (let j = 0; j < args.length && i < arr.length; j++) {
            if (arr[i] === args[j]) {
                alert = true;
            };
        };
        if (alert === false) {
        filteredArray.push(arr[i]);
        };
        
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
