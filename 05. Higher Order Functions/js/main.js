/**
 * Higher Order Functions:
 * - does at least one of the following:
 *    1. takes one or more functions as an argument (parameter)
 *    2. returns a function as result
 */
import { posts } from "./posts.js";

// foreach
// posts.forEach((post) => {
//   console.log(post.title);
// });

// filter
const filtered = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filtered);

// map
const mapped = filtered.map((post) => {
  return { ...post, id: post.id * 10 };
});
console.log(mapped);

// reduce
const reducedPostValue = mapped
  .map((post) => post.id)
  .reduce((sum, id) => {
    return sum + id;
  });
console.log(reducedPostValue);
