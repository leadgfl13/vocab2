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
let item5 = document.getElementById("dropdown5");
let item6 = document.getElementById("dropdown6");
let item7 = document.getElementById("dropdown7");
let item8 = document.getElementById("dropdown8");
let bottomright = document.getElementById("bottomright");

// word and definition buttons
let word1 = document.getElementById("word1");
let definition1 = document.getElementById("definition1");
let word2 = document.getElementById("word2");
let definition2 = document.getElementById("definition2");
let word3 = document.getElementById("word3");
let definition3 = document.getElementById("definition3");
let word4 = document.getElementById("word4");
let definition4 = document.getElementById("definition4");
let word5 = document.getElementById("word5");
let definition5 = document.getElementById("definition5");
let word6 = document.getElementById("word6");
let definition6 = document.getElementById("definition6");
let word7 = document.getElementById("word7");
let definition7 = document.getElementById("definition7");
let word8 = document.getElementById("word8");
let definition8 = document.getElementById("definition8");

//make dropdown contaner visible

menu.addEventListener("mouseover", () => {
	let test = document.getElementById("dropdowncontainer");
	test.setAttribute("id", "visible");
	let dropdowns = document.getElementsByClassName("dropdownitemvisible");
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

item3.addEventListener("mouseover", () => {
	let switch3 = document.getElementById("switchcontainer3");
	switch3.id = "visibleswitch3";
});

item4.addEventListener("mouseover", () => {
	let switch4 = document.getElementById("switchcontainer4");
	switch4.id = "visibleswitch4";
});
item5.addEventListener("mouseover", () => {
	let switch5 = document.getElementById("switchcontainer5");
	switch5.id = "visibleswitch5";
});
item6.addEventListener("mouseover", () => {
	let switch6 = document.getElementById("switchcontainer6");
	switch6.id = "visibleswitch6";
});
item7.addEventListener("mouseover", () => {
	let switch7 = document.getElementById("switchcontainer7");
	switch7.id = "visibleswitch7";
});
item8.addEventListener("mouseover", () => {
	let switch8 = document.getElementById("switchcontainer8");
	switch8.id = "visibleswitch8";
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
item3.addEventListener("mouseleave", () => {
	let switch3 = document.getElementById("visibleswitch3");
	switch3.id = "switchcontainer3";
});
item4.addEventListener("mouseleave", () => {
	let switch4 = document.getElementById("visibleswitch4");
	switch4.id = "switchcontainer4";
});
item5.addEventListener("mouseleave", () => {
	let switch5 = document.getElementById("visibleswitch5");
	switch5.id = "switchcontainer5";
});
item6.addEventListener("mouseleave", () => {
	let switch6 = document.getElementById("visibleswitch6");
	switch6.id = "switchcontainer6";
});
item7.addEventListener("mouseleave", () => {
	let switch7 = document.getElementById("visibleswitch7");
	switch7.id = "switchcontainer7";
});
item8.addEventListener("mouseleave", () => {
	let switch8 = document.getElementById("visibleswitch8");
	switch8.id = "switchcontainer8";
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

word3.addEventListener("click", () => {
	moveCarousel(unit3_vocab, 0);
	topright.innerHTML = "Unit 3";
});

definition3.addEventListener("click", () => {
	moveCarousel(unit3_vocab, 1);
	topright.innerHTML = "Unit 3";
});
word4.addEventListener("click", () => {
	moveCarousel(unit4_vocab, 0);
	topright.innerHTML = "Unit 4";
});

definition4.addEventListener("click", () => {
	moveCarousel(unit4_vocab, 1);
	topright.innerHTML = "Unit 4";
});
word5.addEventListener("click", () => {
	moveCarousel(unit5_vocab, 0);
	topright.innerHTML = "Unit 5";
});

definition5.addEventListener("click", () => {
	moveCarousel(unit5_vocab, 1);
	topright.innerHTML = "Unit 5";
});

word6.addEventListener("click", () => {
	moveCarousel(unit6_vocab, 0);
	topright.innerHTML = "Unit 6";
});

definition6.addEventListener("click", () => {
	moveCarousel(unit6_vocab, 1);
	topright.innerHTML = "Unit 6";
});
word7.addEventListener("click", () => {
	moveCarousel(unit7_vocab, 0);
	topright.innerHTML = "Unit 7";
});

definition7.addEventListener("click", () => {
	moveCarousel(unit7_vocab, 1);
	topright.innerHTML = "Unit 7";
});
word8.addEventListener("click", () => {
	moveCarousel(unit8_vocab, 0);
	topright.innerHTML = "Unit 8";
});

definition8.addEventListener("click", () => {
	moveCarousel(unit8_vocab, 1);
	topright.innerHTML = "Unit 8";
});
