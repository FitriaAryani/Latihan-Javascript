// Define a function called printHeart that prints out the string "<3"
// Execute your function once
function printHeart() {
  console.log("<3");
}
printHeart();

// return value practice
function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

// scope practice
let animal = "Giant Pasific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

// arrow function
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
