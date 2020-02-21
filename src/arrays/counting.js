/**
 * TASK: Given an array of integers from [0, N], write a function
 * that counts the number of times each element in the array can be
 * divided by 2 (without a remainder) and returns an array containing
 * the indexes of only the numbers that can be divided by 2
 * (without a remainder) 3 times or more
 */

/**
 * Calculates total number of integers divisible by two
 * @param {number[]} A
 */
function solution(A) {
  // todo: implement function here
}

function main() {
  const A = new Array(125).fill(0).map((_, i) => i + 1);

  const y = solution(A);
  if (y.join() !== [15, 31, 47, 63, 79, 95, 111].join())
    console.error("Wrong Answer: Please implement a correct solution");
  else console.log("Correct, Welldone");
}

main();
