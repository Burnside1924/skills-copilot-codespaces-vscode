// write a function that adds any number of numbers together
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}