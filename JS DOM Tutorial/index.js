const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
const views1 = document.querySelectorAll(".view");

const divs = view1.querySelectorAll("div");
const divs1 = view1.getElementsByTagName("div");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  // evenDivs[i].style.width = "200px";
  // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello World!</h1> <p>This should align right</p>";
navbar.style.justifyContent = "space-between";

console.log(evenDivs);
// outputs the parent element
console.log(evenDivs[0].parentElement);
// outputs the children of the parent element
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
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
