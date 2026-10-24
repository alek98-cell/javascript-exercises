const palindromes = function (string) {
    let whitelist = "qwertzuiopüasdfghjklöäyxcvbnm1234567890ß";
    let arr = string.toLowerCase().split("").filter((symbol) => whitelist.includes(symbol));
    let palindrome = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            palindrome = false;
        }
    }
    return(palindrome);
};

// Do not edit below this line
module.exports = palindromes;
