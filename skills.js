// write a function that adds any number of numbers together
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
};
// write a function that subtracts any number of number from each other
function subtract(...numbers) {
  return numbers.reduce((difference, num) => difference - num);
}