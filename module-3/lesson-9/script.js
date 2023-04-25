"use strict";
let body = document.querySelector("body");
body.style.cssText = "background-color: darkblue";
let card = document.querySelector(".card");
let cardText = document.querySelector(".card__text");
card.style.cssText = "height: 450px; width: 300px; box-shadow: 5px 5px 3px silver; display: flex; flex-direction: column; padding: 5px; justify-content: space-between; background-color: white; margin: 0 auto;";
cardText.style.cssText = "height: 50%; width: 100%";

function black() {
    
    body.style.cssText = "background-color: white";
    card.style.cssText = "height: 450px; width: 300px; box-shadow: 5px 5px 3px silver; display: flex; flex-direction: column; padding: 5px; justify-content: space-between; margin: 0 auto; background-color: darkblue; transition: all 0.3s ease;"
}
