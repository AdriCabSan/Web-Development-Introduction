//By definition, a higher-order function is a function that either takes
//a function as an argument or returns a function.

/*Taking a function as an argument*/
function evaluatesToFive(num, fn) {
  return fn(num) === 5;
}

function divideByTwo(num) {
  return num / 2;
}

evaluatesToFive(10, divideByTwo);
// true

evaluatesToFive(20, divideByTwo);
// false
//
//
/*Returning a function*/

function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

const multiplyByThree = multiplyBy(3);
const multiplyByFive = multiplyBy(5);

multipyByThree(10); // 30

multiplyByFive(10); // 50

