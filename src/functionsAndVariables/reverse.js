/**
 * TASK 1: Write a function to reverse the number N
 * example: 34221 ---> 12243
 * @param {number} N
 */
function solution1(N) {
  //todo: implement solution here
  
  const N_new = (N.toString()).split("");
  let Arry=[];
  for(let i = N_new.length-1; i >= 0; i--){
    Arry.push(N_new[i]);
  }
  return parseInt((Arry.join('')));
}

function main() {
  const N1 = 10293848493;

  const y1 = solution1(N1);
  if (y1 !== 39484839201)
    console.error("Wrong Answer: Please implement a correct solution");
  else console.log("Correct, Welldone");
}
main();