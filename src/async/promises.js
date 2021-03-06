const fetch = require("node-fetch").default;
const posts = require("../../data/posts");

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
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data));
  });
}

/**
 * TASK 2: Implement a function using async/await that works exactly like
 * the above function
 */

/**
 * Returns resolved data ==> packaged in a Promise
 *
 * @param {string} url
 * @returns {Promise}
 */
async function getPostsAsync(url) {
  //todo: implement solution

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function main() {
  getPosts("https://jsonplaceholder.typicode.com/posts").then(postsRes => {
    if (postsRes.toString() === posts.toString())
      console.log("TASK 1: Correct, Welldone");
    else
      console.log("TASK 1: Wrong Answer: Please implement a correct solution");
  });

  getPostsAsync("https://jsonplaceholder.typicode.com/posts").then(postsRes => {
    if (postsRes.toString() === posts.toString())
      console.log("TASK 2: Correct, Welldone");
    else
      console.log("TASK 2: Wrong Answer: Please implement a correct solution");
  });
}

main();
