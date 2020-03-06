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

function main() {
  getPosts("https://jsonplaceholder.typicode.com/posts").then(postsRes => {
    if (postsRes.toString() === posts.toString())
      console.log("Correct, Welldone");
    else console.log("Wrong Answer: Please implement a correct solution");
  });
}

main();
