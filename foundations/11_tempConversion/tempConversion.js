const convertToCelsius = function(num) {
  let celsiusRaw = (num - 32)*(5/9);
  let CelsiusRounded = ((Math.round(celsiusRaw * 10))/10);
  return CelsiusRounded;
};

const convertToFahrenheit = function(num) {
  let fahrenheitRaw = (num * (9/5) + 32);
  let fahrenheitRounded =((Math.round(fahrenheitRaw * 10))/10);
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
