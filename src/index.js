import "./style.css";
import { moveCarousel } from "./modules/carousel";
import { unit1_vocab } from "./modules/units";
import { unit2_vocab } from "./modules/units";
import { unit3_vocab } from "./modules/units";
import { unit4_vocab } from "./modules/units";
import { unit5_vocab } from "./modules/units";
import { unit6_vocab } from "./modules/units";
import { unit7_vocab } from "./modules/units";
import { unit8_vocab } from "./modules/units";

//declare unit variables
const unit1 = unit1_vocab;
const unit2 = unit2_vocab;
const unit3 = unit3_vocab;
const unit4 = unit4_vocab;
const unit5 = unit5_vocab;
const unit6 = unit6_vocab;
const unit7 = unit7_vocab;
const unit8 = unit8_vocab;

//Global variables on main page
const leftbutton = document.getElementById("leftarrow");
const rightbutton = document.getElementById("rightarrow");

let counter = 0;
let carousel = document.getElementById("carouselcontainer");
let test = document.getElementById("dropdowncontainer");
let switch1 = document.getElementById("switchcontainer1");
let switch2 = document.getElementById("switchcontainer2");
let switch3 = document.getElementById("switchcontainer3");
let switch4 = document.getElementById("switchcontainer4");
let switch5 = document.getElementById("switchcontainer5");
let switch6 = document.getElementById("switchcontainer6");
let switch7 = document.getElementById("switchcontainer7");
let switch8 = document.getElementById("switchcontainer8");
//make a function to retrieve the current unit

function getUnit() {}
// causes card to flip on a click
carousel.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

//lets card flip on f press
document.addEventListener("keydown", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].style.cursor = "pointer";
			card[i].style.transform = "rotateY(180deg)";
		}
	}
});
document.addEventListener("keyup", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].style.cursor = "pointer";
			card[i].style.transform = "rotateY(0deg)";
		}
	}
});

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
let back = document.getElementById("back");

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

//make dropdown contanier visible

menu.addEventListener("mouseover", () => {
	test.setAttribute("id", "visible");
});

menu.addEventListener("mouseleave", () => {
	test.setAttribute("id", "dropdowncontainer");
});

//make swich for each unit visible----------------------------
item1.addEventListener("mouseover", () => {
	switch1.id = "visibleswitch1";
});

item2.addEventListener("mouseover", () => {
	switch2.id = "visibleswitch2";
});

item3.addEventListener("mouseover", () => {
	switch3.id = "visibleswitch3";
});

item4.addEventListener("mouseover", () => {
	switch4.id = "visibleswitch4";
});
item5.addEventListener("mouseover", () => {
	switch5.id = "visibleswitch5";
});
item6.addEventListener("mouseover", () => {
	switch6.id = "visibleswitch6";
});
item7.addEventListener("mouseover", () => {
	switch7.id = "visibleswitch7";
});
item8.addEventListener("mouseover", () => {
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
	test = moveCarousel(unit1_vocab, 0);
	console.log(test);
	topright.innerHTML = "Scientific Method";
});

definition1.addEventListener("click", () => {
	moveCarousel(unit1_vocab, 1);
	topright.innerHTML = "Scientific Method";
});

word2.addEventListener("click", () => {
	moveCarousel(unit2_vocab, 0);
	topright.innerHTML = "Life and Cells";
});

definition2.addEventListener("click", () => {
	moveCarousel(unit2_vocab, 1);
	topright.innerHTML = "Life and Cells";
});

word3.addEventListener("click", () => {
	moveCarousel(unit3_vocab, 0);
	topright.innerHTML = "Nutrition";
});

definition3.addEventListener("click", () => {
	moveCarousel(unit3_vocab, 1);
	topright.innerHTML = "Nutrition";
});
word4.addEventListener("click", () => {
	moveCarousel(unit4_vocab, 0);
	topright.innerHTML = "Respiration/Photosynthesis";
});

definition4.addEventListener("click", () => {
	moveCarousel(unit4_vocab, 1);
	topright.innerHTML = "Respiration/Photosynthesis";
});
word5.addEventListener("click", () => {
	moveCarousel(unit5_vocab, 0);
	topright.innerHTML = "Homeostasis";
});

definition5.addEventListener("click", () => {
	moveCarousel(unit5_vocab, 1);
	topright.innerHTML = "Homeostasis";
});

word6.addEventListener("click", () => {
	moveCarousel(unit6_vocab, 0);
	topright.innerHTML = "Genetics";
});

definition6.addEventListener("click", () => {
	moveCarousel(unit6_vocab, 1);
	topright.innerHTML = "Genetics";
});
word7.addEventListener("click", () => {
	moveCarousel(unit7_vocab, 0);
	topright.innerHTML = "Evolution";
});

definition7.addEventListener("click", () => {
	moveCarousel(unit7_vocab, 1);
	topright.innerHTML = "Evolution";
});
word8.addEventListener("click", () => {
	moveCarousel(unit8_vocab, 0);
	topright.innerHTML = "Ecology";
});

definition8.addEventListener("click", () => {
	moveCarousel(unit8_vocab, 1);
	topright.innerHTML = "Ecology";
});

//functions for left and right arrow, and changing counter

leftbutton.addEventListener("click", () => {
	// needs to take the output of the carousel container to then use
	//if (counter == 0) {
	//	counter = keys.length - 1;
	//} else {
	//	counter = counter - 1;
	//}
	//front.innerHTML = keys[counter];
	//back.innerHTML = values[counter];
	//checkDots();
	//return counter;
});

rightarrow.addEventListener("click", () => {
	//needs to take the output of the carousel container to then use
	if (counter == keys.length - 1) {
		counter = 0;
	} else {
		counter = counter + 1;
	}
	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];
	checkDots();
	return counter;
});
//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
function checkDots() {
	for (let i = 0; i < keys.length; i++) {
		if (counter == i) {
			let dots = document.getElementsByClassName("circle");
			for (let i = 0; i < dots.length; i++) {
				dots[i].style.backgroundColor = "gray";
			}
			var thisdot = document.getElementById("dots" + i);
			thisdot.style.backgroundColor = "black";
		}
	}
}

function leftPress(event) {
	if (event.keyCode === 37) {
		if (counter == 0) {
			counter = keys.length - 1;
		} else {
			counter = counter - 1;
		}
		front.innerHTML = keys[counter];
		back.innerHTML = values[counter];

		checkDots();
		return counter;
	}
}
