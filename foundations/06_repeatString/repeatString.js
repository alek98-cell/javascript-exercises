const repeatString = function(word, times) { 
    if (times < 0) return `ERROR`;
        let string = ``;
    for (let minTimes = 0; minTimes < times; minTimes++) {
        string += word;
    }
    return string;
    };

// Do not edit below this line
module.exports = repeatString;
