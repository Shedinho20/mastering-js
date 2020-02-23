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
  result = [];
  // todo: implement function here
  A.forEach(function(item, index, array) {
    if (item % 2 == 0) {
      item = item / 2;
      if (item % 2 == 0) {
        item = item / 2;
        if (item % 2 == 0) {
          result.push(index);
        }
      }
    }
  });
  return result;
}

function main() {
  const A = new Array(125).fill(0).map((_, i) => i + 1);

  const y = solution(A);
  if (
    y.join() !==
    [7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111, 119].join()
  )
    console.error("Wrong Answer: Please implement a correct solution");
  else console.log("Correct, Welldone");
}

main();

/** 
var B = [1,2,2,2,8,8,8,8,8,8,];
var D = solution(B);
console.log(D)
*/
