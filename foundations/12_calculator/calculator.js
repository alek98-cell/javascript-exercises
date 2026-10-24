const add = function(a, b) {
return(a + b)
};

const subtract = function(a, b) {
	return(a - b);
};

const sum = function([...params]) {
	let num = 0;
  for (let i = 0; i < params.length; i++) {
    num += (Number(params[i]));
  }
  return(num);
};

const multiply = function([...params]) {
  let num = Number(params[0]);
  for (let i = 1; i < params.length; i++) {
    num = num * (Number(params[i]));
  }
  return(num);
};

const power = function(a, b) {
  let num = a;
	for (let i = 1; i < b; i++) {
    num = num * a;
  }
  return(num);
};

const factorial = function(a) {
  let num = 1;
	for (let i = 1; i <= a; i++) {
    num = num * i;
  }
  return(num);
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
