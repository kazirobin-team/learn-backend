// function declaration
// named function
function greet() {
  console.log("welcome");
}
// function expression
const sum =
  // anonymous function
  function (a, b) {
    console.log(a + b);
  };

// arrow function
// const add = () => {}
// function invocation / function call
// greet()

// higher order function
function calculator(a, b, operation) {
  //callback function
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

// console.log(calculator(5,10,add))
// console.log(15);

function outer() {
  const outer = "i am outer";
  // console.log(outer)
  // function out(){console.log("i am out")}

  function inner() {
    const inner = "i am inner";
    console.log(inner,innerMostVar)
    
    function innerMost() {
      const innerMostVar = "i am innerMost";
      // console.log(innerMost)
    }

    innerMost();
    // console.dir(innerMost)
  }
  inner();
}
outer();



console.log(a)
var a = 10