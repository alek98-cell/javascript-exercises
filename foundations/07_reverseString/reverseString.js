const reverseString = function(string) {
    let arrCounter = 0;
    let reversedStringArray = [];
    let reversedString = "";

    for (let i = 0; i < string.length; i++) {
        reversedStringArray.push(string.charAt(string.length - (i+1)));
    }

    return reversedStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
