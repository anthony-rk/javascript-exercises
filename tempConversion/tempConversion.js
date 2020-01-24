const ftoc = function(farenheit) {
  let celcius = Math.round(((farenheit - 32) * (5/9)) * 10) / 10;
  return celcius;
}

const ctof = function(celcius) {
  let farenheit = Math.round(((celcius * 9/5) + 32) * 10) / 10;
  return farenheit;
}

module.exports = {
  ftoc,
  ctof
}
