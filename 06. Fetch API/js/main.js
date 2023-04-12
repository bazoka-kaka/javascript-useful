/**
 * FETCH API
 * =========
 * - fetch API requires: callbacks, promises, thenables, and async/await
 * - promises are a way to:
 *    1. get rid of callback hell
 *    2. requesting datas from another server (we'll have to wait for this most of the time)
 * - 3 states of promises:
 *    1. pending
 *    2. fulfilled
 *    3. rejected
 *  - when you fetch data from another server, you're supposed to wait for the data to get to you before doing something with it, otherwise, you would only be doing something with empty data.
 *  - the "await" keyword means: wait for the promise to resolve or reject first, then you're allowed to go to the next line of code. The "await" keyword must be executed within a function with "async" keyword
 *  - async / await replaces the use of "then" and "catch" keywords bc they could be like callback hell.
 */

// callbacks

// callback hell example
/**
 * promises are to get rid of these callback hells
 */
// firstFunction(param, function () {
//   // do stuffs here
//   secondFunction(param, function () {
//     thirdFunction(param, function () {
//       // do something here
//     });
//   });
// });

// Promises
// const myPromise = new Promise((resolve, reject) => {
//   const error = true;
//   if (!error) {
//     resolve("Yes! Resolved the promise.");
//   } else {
//     reject("No! Rejected the promise.");
//   }
// });

// // this only returns the state of the promise not the actual value
// console.log(myPromise);

// // Thenables
// myPromise
//   .then((result) => {
//     return result + " First Thenable.";
//   })
//   .then((modified) => {
//     console.log(modified);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promises using setTimeout to delay resolve and thenable (to simulate fetching data)
// const myFirstPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! Resolved the promise.");
//   } else {
//     reject("No! Rejected the promise.");
//   }
// });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("Yes! Resolved the second promise.");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myFirstPromise.then((value) => {
//   console.log(value);
// });

// Pending example
/**
 * here the console.log() will only be displaying the current state (pending state) because the data haven't been received yet. The right thing to do: wait the data to be received from the server first then do something like console.log()
 */
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// fetching it the right way
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // this is not readable yet, we have to convert the readableData into json
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     // data.forEach((user) => {
//     //   console.log(user);
//     // });
//     return data;
//   });

// this is the same with before (not accepting anything readable yet bc the datas hasn't been received yet to be console logged) - we're gonna need async await
// console.log(users);

// Async / await
// const myUsers = {
//   usersList: [],
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// const anotherFunc = async () => {
//   const users = await myCoolFunction();
//   myUsers.usersList = users;
//   console.log(myUsers.usersList);
// };

// anotherFunc();

// another example of async / await
// const getAllUsersEmail = async () => {
//   const response = await fetch("http://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   const emails = users.map((user) => user.email);

//   postToWebPage(emails);
// };

// const postToWebPage = (emails) => {
//   console.log(emails);
// };

// getAllUsersEmail();

// using second parameter of fetch
// const getJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com", {
//     method: "GET",
//     headers: {
//       // you have to specify what type of data to receive
//       // Accept: "text/plain",
//       Accept: "application/json",
//     },
//   });
//   // const textJoke = await response.text();
//   const joke = await response.json();

//   // console.log(textJoke);
//   console.log(joke.joke);
// };

// getJoke();

// posting data using fetch function
// const jokeObject = {
//   id: 1,
//   joke: "Why is it called dark ages? Because of all the knights.",
// };

// const postJoke = async (data) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       // you have to specify the type of data being sent
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   const jsonData = await response.json();

//   console.log(jsonData);
// };

// postJoke(jokeObject);

// retrieving data with URL parameters
// const requestJoke = async (firstname, lastname) => {
//   const response = await fetch(
//     `https://api.icndb.com/jokes/random?firstname=${firstname}&lastname=${lastname}&limitTo=[nerdy]`
//   );
//   const jsonData = await response.json();

//   console.log(jsonData.value.joke);
// };

// requestJoke("Benjamin", "Franklin");

// abstract into functions
const getDataFromForm = () => {
  const reqObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return reqObj;
};

const buildRequestUrl = (reqData) => {
  return `https://api.icndb.com/jokes/random?firstname=${reqData.firstName}&lastname=${reqData.lastname}&limitTo=${reqData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonData = await response.json();
  const joke = jsonData.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// procedural "workflow" function
const processJokeRequest = async () => {
  const jokeObj = getDataFromForm();
  const url = buildRequestUrl(jokeObj);
  const joke = await requestJoke(url);
  postJokeToPage(joke);
  console.log("Finished");
};

processJokeRequest();
