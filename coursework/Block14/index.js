// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO

  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    // console.log(element)
    sum += element;

    // console.log(sum)
  }
  console.log(sum);
  return sum;
}

// 1+2= 3
// 3+3= 6
// 6+4= 10
// 10+5= 15
// sum = 15

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  // get the sum, divide the by length of numbers. we use a for loop
  // we need to return the SUM in order to
  // we don't need to re-define the sum.

  let sum = 0;
  //let mean = sum / numbers.length;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element;
  }

  let mean = sum / numbers.length

  // console.log(mean);
  return mean;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  // sort the array from smallest to largest value
  // let min = 0 
  //return the smallest value (call back function)  
  //if (array === 0) return null;
  let min = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < min) { min = numbers[index]; }

  }

  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  //review why does index has to start at 1
  // if we had index = 0, it would create an infinite loop
  let max = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > max) { max = numbers[index]; }

  }

  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  // retrieve getMax and getMin defined by range
  range = getMax(numbers) - getMin(numbers)

  return range;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  getEvens = numbers.filter(num => num % 2 === 0);
  return getEvens;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  getOdds = numbers.filter(num => num % 2 !== 0);
  return getOdds;
}

