//function declaration
//hoisting is supported
// function square(num) {
//   return num * num;
// }

// function expression
// hoisting is not supported
// const square = function (num) {
//   return num * num;
// };
// console.log(square(5));

//arrow function
// const square = (num) => {  //EXPLICIT RETURN
//   return num * num;
// };
//it will work same as normal function

const square = (num) => num * num; // implicit return means it will automatically return
const add = (a, b) => a + b;
setTimeout(() => {
  console.log("object");
}, 2000);

//when we have no argument keep the parenthesis empty ()

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(4, 5));
// console.log(multiply(4)); //it will output not a number NaN
// BECAUSE JS AUTOMATICALLY DO 4* UNDEFINED
//THATS WHERE WE NEED DEFAULT PARAMETER

function multiply(a, b = 1) {
  return a * b;
}
function rollADie(noOfSides = 6) {
  return Math.floor(Math.random() * noOfSides) + 1;
}
console.log(Math.random());
