const fibonacci = function(n) {
    let iterations = (n === !isNaN) ? n : Number(n);
    let numA = 0;
    let numB = 1;
    let fib = 0;
    if (iterations >= 0) {
        for (let i = 0; i < iterations; i++) {
            fib = numA + numB;
            numA = numB;
            numB = fib;
        }
        return(numA);
    } else {
        return("OOPS")
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
