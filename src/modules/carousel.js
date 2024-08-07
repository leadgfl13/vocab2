import { checkDots } from "..";
import { counter } from "..";
export function moveCarousel(unit, choice) {
	let carousel = document.getElementById("carouselcontainer");
	let front = document.getElementById("front");
	let back = document.getElementById("back");

	carouseldots.innerHTML = "";
	counter.number = 0;
	var keys = Object.keys(unit);
	var values = Object.values(unit);
	if (choice == 1) {
		let temp = keys;
		keys = values;
		values = temp;
	}
	front.innerHTML = keys[counter.number];
	back.innerHTML = values[counter.number];
	//creates dots for carousel and adds them to the page

	return [keys, values];
}

export function doDots(thekeys, thevalues) {
	//creates the Dots and appends them to the page
	for (let i = 0; i < thekeys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		carouseldots.append(dot);
	}

	let dots = document.getElementsByClassName("circle");
	//function to make dot click and showcase the corresponding card by updating the counter value
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", () => {
			counter.number = i;
			front.innerHTML = thekeys[counter.number];
			back.innerHTML = thevalues[counter.number];
			dots[i].style.backgroundColor = "gray";
			var thisdot = document.getElementById("dots" + i);
			thisdot.style.backgroundColor = "black";
		});
		//this checks the colors and changes them so that only the counter is dark
	}
	checkDots();

	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
}
