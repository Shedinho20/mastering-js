/**
 * TASK 1: Write a function which will take an array of
 * numbers and return the second lowest and second greatest numbers
 * @param {number[]} A
 */
function solution1(A) {
  // todo: implement solution here
  A = A.sort((a, b) => a - b);
  let A_new = [...new Set(A)];
  return [A_new[2], A_new[A_new.length - 2]];
}

/**
 * TASK 2: Write a function which will take an array of
 * numbers and return the number with the most repititions
 * @param {number[]} A
 */
function solution2(A) {
  // todo: implement solution here
  A = A.sort((a, b) => a - b);
  let DIC = new Map();
  let counter = 1;
  let i = 0;
  while (i < A.length) {
    if (A[i] == A[i + 1]) {
      counter++;
    } else {
      DIC.set(A[i], counter);
      counter = 1;
    }
    i++;
  }
  let Max_value = 0;
  let Max_key = "";
  for (let [key, value] of DIC) {
    if (value > Max_value) {
      Max_value = value;
      Max_key = key;
    }
  }
  return parseInt(Max_key);
}

function main() {
  const A1 = [3, 1, 7, 8, 9, 0, 1, 20, 17];
  const y1 = solution1(A1);
  if (y1.join() !== [3, 17].join())
    console.error("TASK 1 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 1 Correct, Welldone");

  const A2 = [1, 3, 4, 1, 5, 5, 7, 4, 1, 4, 2, 3, 4, 4, 9, 4, 13, 4, 4];
  const y2 = solution2(A2);
  if (y2 !== 4)
    console.error("TASK 2 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 2 Correct, Welldone");
}

main();
