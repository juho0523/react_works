let square = function(x) {
  return x * x;
}

let square2 = (x) => {
  return x * x;
}

let square3 = x => x * x;

let message = () => console.log('Hello World!');

console.log(square(5))
console.log(square2(5))
console.log(square3(5))
message();