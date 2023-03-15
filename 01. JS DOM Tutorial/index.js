/** get view1 and view2 */
const view1 = document.querySelector(".view1");
const view2 = document.getElementById("view2");

/** set display view1 to flex and view2 to none */
view1.style.display = "flex";
view2.style.display = "none";

/** get views class 2 ways */
const views = document.querySelectorAll(".view");
const sameViews = document.getElementsByClassName("view");

/** get div elements 2 ways */
const divs = document.querySelectorAll("div");
const sameDivs = document.getElementsByTagName("div");

/** get even divs */
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
}

/** set navText text content and navbar content */
const navText = document.querySelector("nav h1");
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello World!</h1> <p>This is on the right</p>";
navbar.style.display = "space-between";

/** output even divs */
console.log(evenDivs);
/** output parent element of first even divs */
console.log(evenDivs[0].parentElement);
/** output first even div's parent's last child and last child element */
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
/** output first even div's parent's first child and first child element */
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
/** output first even div's parent's next sibling and next element sibling */
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);

/** output last even div previous sibling and previous element sibling */
console.log(evenDivs[evenDivs.length - 1].previousSibling);
console.log(evenDivs[evenDivs.length - 1].previousElementSibling);

/** make view1 display to none and view2 to flex, row, wrap, margin of 10px */
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexWrap = "wrap";
view2.style.flexDirection = "row";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
