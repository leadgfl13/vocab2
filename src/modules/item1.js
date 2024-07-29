export function moveCarousel(unit, choice) {
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
	document.addEventListener("keydown", function (event) {
		if (event.key === "f") {
			let card = document.getElementsByClassName("card");
			for (let i = 0; i < card.length; i++) {
				card[i].style.cursor = "pointer";
				card[i].style.transform = "rotateY(180deg)";
			}
		}
	});

	// causes card to flip on a click
	carousel.addEventListener("click", () => {
		let card = document.getElementsByClassName("card");
		for (let i = 0; i < card.length; i++) {
			card[i].classList.toggle("flipped");
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
			checkDots();

			return counter, unit;
		});
		carouseldots.append(dot);
		checkDots();
	}

	//functions for left and right arrow, and changing counter
	let leftarrow = document.getElementById("left");
	let rightarrow = document.getElementById("right");
	leftarrow.addEventListener("click", () => {
		if (counter == 0) {
			counter = keys.length - 1;
		} else {
			counter = counter - 1;
		}
		front.innerHTML = keys[counter];
		back.innerHTML = values[counter];

		checkDots();
		return counter;
	});

	rightarrow.addEventListener("click", () => {
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
		if (event.keyCode === 39) {
			if (counter == keys.length - 1) {
				counter = 0;
			} else {
				counter = counter + 1;
			}
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			checkDots();
			return counter;
		}
		//spacbar
		if (event.keyCode === 32) {
			if (front.innerHTML == keys[counter]) {
				front.innerHTML = back.innerHTML;
			} else if (back.innerHTML == values[counter]) {
				front.innerHTML = keys[counter];
			}
		}
		if (event.keyCode === 38) {
			let dots = document.getElementsByClassName("circle");
			counter = Math.floor(Math.random() * dots.length);
			front.innerHTML = keys[counter];
			back.innerHTML = values[counter];
			checkDots();
		}
	}
	document.addEventListener("keydown", leftPress);
}
