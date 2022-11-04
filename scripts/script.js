// JavaScript Document
console.log("hi");

var deButton1 = document.querySelector("footer section:nth-of-type(2) button");
var deButton2 = document.querySelector("footer section:nth-of-type(3) button");
var deButton3 = document.querySelector("footer section:nth-of-type(4) button");

var deHeader1 = document.querySelector("footer section:nth-of-type(2) h4");
var deHeader2 = document.querySelector("footer section:nth-of-type(3) h4");
var deHeader3 = document.querySelector("footer section:nth-of-type(4) h4");

// let buttons = document.getElementsByClassName('plus-sign');

// for (let index = 0; index < buttons.length; index++) {
//     buttons[index].addEventListener('click', function () {
//         var hetMenu = document.querySelector("footer section:nth-of-type(" + (index + 1) + ")");
//         hetMenu.classList.toggle("open");
//     });   
// }

deButton1.addEventListener("click", toggleMenu1);
deHeader1.addEventListener("click", toggleMenu1);

deButton2.addEventListener("click", toggleMenu2);
deHeader2.addEventListener("click", toggleMenu2);

deButton3.addEventListener("click", toggleMenu3);
deHeader3.addEventListener("click", toggleMenu3);

function toggleMenu1() {
	var hetMenu1 = document.querySelector("footer section:nth-of-type(2)");
	hetMenu1.classList.toggle("open");
}

function toggleMenu2() {
	var hetMenu2 = document.querySelector("footer section:nth-of-type(3)");
	hetMenu2.classList.toggle("open");
}

function toggleMenu3() {
	var hetMenu3 = document.querySelector("footer section:nth-of-type(4)");
	hetMenu3.classList.toggle("open");
}