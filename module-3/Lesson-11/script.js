"use strict";

let list = document.querySelector(".carousel__list"),
    listImg = document.querySelectorAll(".carousel__list-img"),
    prev = document.querySelector("#prev"),
    next = document.querySelector("#next");

    let index = 0;

    function slider () {
        if( index > listImg.length - 1 ) {
            index = 0;
        }
        if( index < 0 ) {
            index = listImg.length - 1;
        }
        list.style.transform = `translateX(${-index * 850}px)` 
    }
   let play = setInterval( () => {
        index++;
        slider()
    }, 3000)
    next.addEventListener("click", () => {
        index++;
        slider();
        clearInterval(play)
    });
    prev.addEventListener("click", () => {
        index--;
        slider();
        clearInterval(play)
    });
    


    