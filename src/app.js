/* eslint-disable */
import { arrow } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = function() {
  let buttonPlaceHolder1 = document.querySelector("#genButton");
  buttonPlaceHolder1.addEventListener("click", generateOrDisplay);
  let buttonPlaceHolder2 = document.querySelector("#showListButton");
  buttonPlaceHolder2.addEventListener("click", displayList);
  let buttonPlaceHolder3 = document.querySelector("#showListButton");
  buttonPlaceHolder3.addEventListener("click", changeButtonText);
};
let emptyDomList = [];
let genDomain = [];
let addedDomain = [];
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let topLevel = [".com", ".net", ".us", ".io", ".de"];

function generateDomain() {
  for (var a = 0; a < pronoun.length; a++) {
    for (var b = 0; b < adj.length; b++) {
      for (var c = 0; c < noun.length; c++) {
        for (var d = 0; d < topLevel.length; d++) {
          genDomain.push(pronoun[a] + adj[b] + noun[c] + topLevel[d]);
        }
      }
    }
  }
}
function generateOrDisplay() {
  if (genDomain.length == 0) {
    generateDomain();
  } else if (genDomain != 0) {
    document.getElementById("displayedDomain").innerHTML =
      genDomain[Math.floor(Math.random() * genDomain.length)];
  }
}

function displayList() {
  document.getElementById("domainList").innerHTML = genDomain
    .map(
      (domain, index) =>
        `<li class = "list-group-item flex-fill">${domain}<a id = "d${index}" href="#">Delete</a></li>`
    )
    .join("");
  document
    .querySelectorAll("#domainList a")
    .forEach(a => a.addEventListener("click", deleteDomain));
}
function deleteDomain(event) {
  let clickedAnchor = event.target.id.substring(1);
  genDomain = genDomain.filter((domain, index) => index != clickedAnchor);
  displayList();
}

function hideList() {
  document.getElementById("domainList").innerHTML = emptyDomList;
}

function changeButtonText() {
  var listBtn = document.getElementById("showListButton");

  if (listBtn.value == "Show List") {
    listBtn.value = "Hide List";
    listBtn.innerHTML = "Hide List Of Domains";
  } else if (listBtn.value == "Hide List") {
    hideList();
    listBtn.value = "Show List";
    listBtn.innerHTML = "Show List Of Domains";
  }
}

// function checkDomListValue(){
//   if
// }

// function addAdjAndDisplay() {
//   function addAdj() {
//     let inputValue = document.getElementById("addInput").value;
//     let addOutput = inputValue +
//   }
// }

// function addNounAndDisplay() {
//   function addNoun() {}
// }

//This was my for-each list display loop before refractoring
// function displayList() {
//   let list = document.getElementById("domainList");
//   genDomain.forEach(item => {
//     let li = document.createElement("li");
//     li.innerText = item;
//     list.appendChild(li);
//   });
// }
