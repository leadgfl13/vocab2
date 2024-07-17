import "./style.css";
import { moveCarousel } from "./modules/item1";
import { unit1_vocab } from "./modules/units";
import { unit2_vocab } from "./modules/units";

//Glocal variables on main page
let menu = document.getElementById("menubutton");
let item1 = document.getElementById("dropdown1");
let item2 = document.getElementById("dropdown2");
let item3 = document.getElementById("dropdown3");
let item4 = document.getElementById("dropdown4");

let bottomright = document.getElementById("bottomright");
//
let dropdowns = [item1, item2, item3, item4];

//for (let i = 0; i < dropdowns.length; i++) {
//	dropdowns[i].addEventListener("click", () => {
//		alert("I have been clicked");
//		sayHello();
//	});
//}

// individual event listeners for each dropdown menu item

item2.addEventListener("click", () => {
	Menu2();
});

item3.addEventListener("click", () => {
	menu3();
});

// loading module for each dropdown item

item2.addEventListener("click", () => console.log("load module 2 here"));
item3.addEventListener("click", () => console.log("load module 3 here"));
item4.addEventListener("click", () => console.log("load module 4 here"));

menu.addEventListener("mouseover", () => {
	let test = document.getElementById("dropdowncontainer");
	test.setAttribute("id", "visible");
});

menu.addEventListener("mouseleave", () => {
	let test = document.getElementById("visible");
	test.setAttribute("id", "dropdowncontainer");
});

item1.addEventListener("click", () => {
	moveCarousel(unit1_vocab);
});

item2.addEventListener("click", () => {
	moveCarousel(unit2_vocab);
});
