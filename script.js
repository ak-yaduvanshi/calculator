"use strict"
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
let calcD = document.getElementById("inp");
arr.forEach(butt => {
    butt.addEventListener("click", (e) => {
        // console.log("yup",e);
        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            calcD.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            calcD.value = string;
        }
        else if (e.target.innerHTML == "=") {
            string = eval(string);
            calcD.value = string;
        }
        else {
            console.log("ty",string);
            string += e.target.innerHTML;
            console.log(string);
            calcD.value = string;
        }
    });
});