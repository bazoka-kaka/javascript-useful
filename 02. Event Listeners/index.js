// javascript event listeners

// const view = document.querySelector(".view");
// const div = view.querySelector("div");
// const h1 = div.querySelector("h1");

// Syntax: addEventListener(event, function, useCapture);

// const doSomething = () => {
//   alert("Doing something.");
// };

// h1.addEventListener("click", doSomething, false);
// h1.removeEventListener("click", doSomething, false);

// h1.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.innerHTML = "Clicked";
// });

/**
 * the function below is gonna tell whether
 * you are ready or not already to do something with the DOM.
 * this makes the DOM manipulation safer.
 */
// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === "complete") {
//     console.log("readyState: complete");
//     initApp();
//   }
// });

// function initApp() {
//   const boxContainer = document.querySelector(".box-container");
//   const box = boxContainer.querySelector(".box");
//   const h1 = box.querySelector("h1");
//   const nav = document.querySelector("nav");

//   // event bubbling (bc we're not using stopPropagation event method)
//   /**
//    * if we set the third param to true, it's running from the outer to the inner
//    * the default value for the third param (useCapture) is false
//    * e.stopPropagation() is gonna stop the event bubbling
//    */
//   boxContainer.addEventListener(
//     "click",
//     (e) => {
//       // boxContainer.classList.add("purple");
//       // boxContainer.classList.remove("darkblue");
//       boxContainer.classList.toggle("purple");
//       boxContainer.classList.toggle("darkblue");
//     },
//     false
//   );

//   box.addEventListener(
//     "click",
//     (e) => {
//       // e.stopPropagation();
//       box.classList.toggle("blue");
//       box.classList.toggle("black");
//     },
//     false
//   );

//   h1.addEventListener(
//     "click",
//     (e) => {
//       let myText = h1.innerHTML === "Text" ? "Clicked" : "Text";
//       h1.innerHTML = myText;
//     },
//     false
//   );

//   // mouse hover event handling
//   nav.addEventListener("mouseover", (e) => {
//     nav.classList.toggle("padding10");
//     nav.classList.toggle("padding20");
//   });

//   nav.addEventListener("mouseout", (e) => {
//     nav.classList.toggle("padding10");
//     nav.classList.toggle("padding20");
//   });
// }

// handling submit
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

function initApp() {
  const view1 = document.querySelector(".view1");
  const myForm = view1.querySelector("form");
  myForm.addEventListener("submit", (e) => {
    // prevent submit default behavior
    e.preventDefault();
    console.log("submitted");
  });
}
