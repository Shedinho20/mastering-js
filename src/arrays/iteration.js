/**
 * TASK: Given an array of integers from [0, N], write a function
 * that returns the total number of integers divisible by 2
*/

/**
 * Calculates total number of integers divisible by two
 * @param {number[]} A 
 */
function solution(A) {
  // todo: implement function here
  var i;
  let count = 0;
  for (i = 0; i < A.length; i++){
    if (A[i] % 2 === 0){
      count=count+1
    }
  }
  return count;
}



function main() {
  const A = new Array(125).fill(0)
    .map((_, i) => i)

  const y = solution(A)
  if (y !== 63) console.error("Wrong Answer: Please implement a correct solution")
  else console.log("Correct, Welldone")
}

main()

