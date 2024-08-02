import { checkDots } from "..";

export function moveCarousel(unit, choice) {
	checkDots();
	let carousel = document.getElementById("carouselcontainer");
	let front = document.getElementById("front");
	let back = document.getElementById("back");

	carouseldots.innerHTML = "";
	let counter = 0;
	var keys = Object.keys(unit);
	var values = Object.values(unit);
	if (choice == 1) {
		let temp = keys;
		keys = values;
		values = temp;
	}
	//makes card flip on f press down

	front.innerHTML = keys[counter];
	back.innerHTML = values[counter];
	//creates dots for carousel and adds them to the page
	for (let i = 0; i < keys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		//function to make dot click and showcase the corresponding card
		dot.addEventListener("click", () => {
			counter = i;
			//need to update image
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
		});
		carouseldots.append(dot);
		let firstdot = document.getElementById("dots0");
		firstdot.style.backgroundColor = "black";
	}
	//functions for left and right arrow, and changing counter

	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red

	return [counter, keys, values];
}
