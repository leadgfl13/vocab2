import "./style.css";
import { doDots } from "./modules/carousel";
import { leftArrow } from "./modules/carousel";
import { moveCarousel } from "./modules/carousel";
import { unit1_vocab } from "./modules/units";
import { unit2_vocab } from "./modules/units";
import { unit3_vocab } from "./modules/units";
import { unit4_vocab } from "./modules/units";
import { unit5_vocab } from "./modules/units";
import { unit6_vocab } from "./modules/units";
import { unit7_vocab } from "./modules/units";
import { unit8_vocab } from "./modules/units";
let currentcarousel = "";
let unit = "";
let keys = "";
let values = "";
let dots = "";
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
let front = document.getElementById("front");
let back = document.getElementById("back");

export let counter = {
	_number: 0, // Internal variable to store the value

	get number() {
		return this._number;
	},

	set number(value) {
		this._number = value;
	},
};

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

// causes card to flip on a click
front.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

back.addEventListener("click", () => {
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("flipped");
	}
});

//lets card flip on f press
document.addEventListener("keypress", function (event) {
	if (event.key === "f") {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].classList.toggle("flipped");
		}
	}
});
//Old style of rotating card "smootly"
//document.addEventListener("keyup", function (event) {
//if (event.key === "f") {
//	let card = document.getElementsByClassName("card");
//for (let i = 0; i < card.length; i++) {
//	card[i].style.cursor = "pointer";
//	card[i].style.transform = "rotateY(0deg)";
//}
//}
//});

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
	const [newkeys, newvalues] = moveCarousel(unit1_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Scientific Method";
});

definition1.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit1_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Scientific Method";
});
word2.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit2_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Life and Cells";
});
definition2.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit2_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Life and Cells";
});
word3.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit3_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Nutrition";
});
definition3.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit3_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Nutrition";
});
word4.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit4_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Homeostasis";
});
definition4.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit4_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Homeostasis";
});
word5.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit5_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Respiration/Photosynthesis";
});
definition5.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit65_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Respiration/Photosynthesis";
});
word6.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit6_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Genetics";
});
definition6.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit6_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Genetics";
});
word7.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit7_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Evolution";
});
definition7.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit7_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Evolution";
});
word8.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit8_vocab, 0);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Ecology";
});
definition8.addEventListener("click", () => {
	const [newkeys, newvalues] = moveCarousel(unit8_vocab, 1);
	doDots(newkeys, newvalues);
	keys = newkeys;
	values = newvalues;
	checkDots();
	topright.innerHTML = "Ecology";
});

//adds the event listener for the left and right arrow
leftbutton.addEventListener("click", () => {
	testRun(keys, values);
	console.log(counter);
});

rightbutton.addEventListener("click", () => {
	rightRun(keys, values);
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") testRun(keys, values);
});
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") rightRun(keys, values);
});

document.addEventListener("keydown", function (event) {
	if (event.key === " ") {
		let temp = front.innerHTML;
		front.innerHTML = back.innerHTML;
		back.innerHTML = temp;
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		makeRandom();
		checkDots();
	}
});

function makeRandom() {
	console.log(keys.length);
	counter.number = Math.floor(Math.random() * keys.length);
	front.innerHTML = keys[counter.number];
	back.innerHTML = values[counter.number];
}

function testRun(thekeys, thevalues) {
	if (counter.number == 0) {
		counter.number = thekeys.length - 1;
	} else {
		counter.number = counter.number - 1;
	}
	front.innerHTML = thekeys[counter.number];
	back.innerHTML = thevalues[counter.number];
	if (front.innerHTML == "undefined" || back.innerHTML == "undefined") {
		front.innerHTML = "select a unit!";
		back.innerHTML = "select a unit!";
	}
	checkDots();
}

function rightRun(thekeys, thevalues) {
	//needs to take the output of the carousel container to then use
	if (counter.number == keys.length - 1) {
		counter.number = 0;
	} else {
		counter.number = counter.number + 1;
	}
	front.innerHTML = thekeys[counter.number];
	back.innerHTML = thevalues[counter.number];
	if (front.innerHTML == "undefined" || back.innerHTML == "undefined") {
		front.innerHTML = "select a unit!";
		back.innerHTML = "select a unit!";
	}

	checkDots();
}
//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
export function checkDots() {
	dots = document.getElementsByClassName("circle");
	for (let i = 0; i < keys.length; i++) {
		dots[i].style.backgroundColor = "gray";

		if (counter.number == i) {
			var thisdot = document.getElementById("dots" + i);
			thisdot.style.backgroundColor = "black";
		}
	}
}
