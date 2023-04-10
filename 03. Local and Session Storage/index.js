/**
 * window.location == location
 * window.alert() == alert()
 *
 * Session Storage
 * ===============
 * - session storage is only temporary and will be gone when you get out of the browser
 * - session storage converts your data into string format, better use JSON format
 * - session storage doesn't accept functions
 *
 * Local Storage
 * =============
 * - local torage is like session storage but it's not temporary and won't be gone even after you closed the browser
 */
const myObject = {
  name: "Benzion",
  hobbies: ["first", "second", "third"],
  logName: function () {
    console.log(name);
  },
};

const myArr = ["first", "second", "third"];

// session storage
// sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
// console.log(mySessionData);

// this outputs string
// console.log(typeof mySessionData);

// local storage
localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// clears only one particular local storage
localStorage.removeItem("myLocalStorage");
// clears all the local storage
localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData);
// getting the key of i-th localstorage
const key = localStorage.key(0);
console.log(key);
// getting total items in localstorage
const totLocalStorage = localStorage.length;
console.log(totLocalStorage);
