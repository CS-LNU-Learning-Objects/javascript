function multiplier(factor){
  return (number) => number * factor;
}
var twice = multiplier(2);
console.log(twice(5)); // ➡ 10
