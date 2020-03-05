/**
 * TASK 1: Write a function to return a promise that resolves to
 * a list of posts from this URL: https://jsonplaceholder.typicode.com/posts
 */

/**
 * Returns a promise posts from the passed url
 * @param {string} url
 * @returns {Promise}
 */
function getPosts(url) {
  //todo: implement solution
  return fetch(url).then(res => res.json());
}

const posts = require("../../data/posts");

function main() {
  getPosts("https://jsonplaceholder.typicode.com/posts").then(postsRes => {
    console.log(postsRes);
    if (postsRes !== posts) {
      console.log("Wrong Answer: Please implement a correct solution");
    } else console.log("Correct, Welldone");
  });
}

main();
