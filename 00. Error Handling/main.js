// Javascript Errors and Error Handling
"use strict";

// ReferenceError
// variable = "Benzion";
// console.log(variable);

// SyntaxError
// console..log();

// TypeError
// const name = "Benzion";
// name = "Yehezkel";

// error handler function
// const makeError = () => {
//   try {
//     const name = "Benzion";
//     name = "Yehezkel";
//   } catch (err) {
//     console.log(err);
//     console.error(err);
//     console.warn(err);
//     console.table(err);
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//   }
// };
// makeError();

// custom error
// function customError(err) {
//   this.name = err.name;
//   this.message = err.message;
//   this.stack = `${this.name}: ${this.message}`;
// }

// const createError = () => {
//   try {
//     throw new customError({
//       name: "Custom error",
//       message: "This is a custom error.",
//     });
//   } catch (err) {
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//   }
// };
// createError();

// generic error constructor
// const makeError = () => {
//   try {
//     throw new Error("This is a custom error!");
//   } catch (err) {
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
// };
// makeError();

// finally
const makeError = () => {
  for (let i = 1; i <= 5; i++) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("...finally");
    }
  }
};
makeError();
