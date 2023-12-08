/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let whoAlAzar = who[Math.floor(Math.random() * who.length)];
  let actionAlAzar = action[Math.floor(Math.random() * action.length)];
  let whatAlAzar = what[Math.floor(Math.random() * what.length)];
  let whenAlAzar = when[Math.floor(Math.random() * when.length)];
  // // console.log("Hello Rigo from the console!");
  let excusaFinal `${whoAlAzar} ${actionAlAzar} ${whatAlAzar} ${whenAlAzar}`;
  return excusaFinal;
}

window.onload = function() {
  let excusa = document.getElementById('excuse');
  excusa.innerHTML = generarExcusa();
};
