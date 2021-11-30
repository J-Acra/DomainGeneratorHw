/* eslint-disable */
import { arrow } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = function() {
  let gendomain = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let topLevel = [".com", ".net", ".us", ".io", ".de"];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < topLevel.length; l++) {
          gendomain.push(pronoun[i] + adj[j] + noun[k] + topLevel[l]);
        }
      }
    }
  }
  console.log(gendomain);
};
