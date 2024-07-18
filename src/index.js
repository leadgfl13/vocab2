import "./style.css";
import { moveCarousel } from "./modules/item1";
import { unit1_vocab } from "./modules/units";
import { unit2_vocab } from "./modules/units";
import { unit3_vocab } from "./modules/units";
import { unit4_vocab } from "./modules/units";
import { unit5_vocab } from "./modules/units";
import { unit6_vocab } from "./modules/units";
import { unit7_vocab } from "./modules/units";
import { unit8_vocab } from "./modules/units";

//Glocal variables on main page
let topright = document.getElementById("topright");
let menu = document.getElementById("menubutton");
let item1 = document.getElementById("dropdown1");
let item2 = document.getElementById("dropdown2");
let item3 = document.getElementById("dropdown3");
let item4 = document.getElementById("dropdown4");

// word and definition buttons
let word1 = document.getElementById("word1");
let definition1 = document.getElementById("definition1");
let word2 = document.getElementById("word2");
let definition2 = document.getElementById("definition2");
let word3 = document.getElementById("word3");
let definition3 = document.getElementById("definition3");
let word4 = document.getElementById("word4");
let definition4 = document.getElementById("definition4");

let bottomright = document.getElementById("bottomright");
let dropdowns = [item1, item2, item3, item4];

//make dropdown contaner visible
menu.addEventListener("mouseover", () => {
	let test = document.getElementById("dropdowncontainer");
	test.setAttribute("id", "visible");
});

menu.addEventListener("mouseleave", () => {
	let test = document.getElementById("visible");
	test.setAttribute("id", "dropdowncontainer");
});

//make swich for each unit visible----------------------------
item1.addEventListener("mouseover", () => {
	let switch1 = document.getElementById("switchcontainer1");
	switch1.id = "visibleswitch1";
});

item2.addEventListener("mouseover", () => {
	let switch2 = document.getElementById("switchcontainer2");
	switch2.id = "visibleswitch2";
});

//make switch for each unit disappear----------------
item1.addEventListener("mouseleave", () => {
	let switch1 = document.getElementById("visibleswitch1");
	switch1.id = "switchcontainer1";
});

item2.addEventListener("mouseleave", () => {
	let switch2 = document.getElementById("visibleswitch2");
	switch2.id = "switchcontainer2";
});

//event listener for selection of choice on unit 1
word1.addEventListener("click", () => {
	moveCarousel(unit1_vocab, 0);
	topright.innerHTML = "Unit 1";
});

definition1.addEventListener("click", () => {
	moveCarousel(unit1_vocab, 1);
	topright.innerHTML = "Unit 1";
});

word2.addEventListener("click", () => {
	moveCarousel(unit2_vocab, 0);
	topright.innerHTML = "Unit 2";
});

definition2.addEventListener("click", () => {
	moveCarousel(unit2_vocab, 1);
	topright.innerHTML = "Unit 2";
});
