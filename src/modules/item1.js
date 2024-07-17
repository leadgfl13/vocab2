export function moveCarousel(unit, choice) {
	carouseldots.innerHTML = "";
	let counter = 0;
	var keys = Object.keys(unit);
	var values = Object.values(unit);
	if (choice == 1) {
		let temp = keys;
		keys = values;
		values = temp;
	}

	carouselcontainer.innerHTML = keys[counter];
	//creates dots for carousel and adds them to the page
	for (let i = 0; i < keys.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		//function to make dot click and showcase the corresponding image
		dot.addEventListener("click", () => {
			counter = i;
			console.log(counter);
			//need to update image
			carouselcontainer.innerHTML = keys[counter];
			checkDots();

			return counter;
		});
		carouseldots.append(dot);
		checkDots();
	}
	//sets defaults image to 0
	//for the background image---------carouselcontainer.style.backgroundImage = images[counter];
	//creates an array of keys and values from the unit 1 object

	//on click will switch between key and value pair
	carouselcontainer.addEventListener("click", () => {
		console.log("teehee");
		if (carouselcontainer.innerHTML == keys[counter]) {
			carouselcontainer.innerHTML = values[counter];
		} else if (carouselcontainer.innerHTML == values[counter]) {
			carouselcontainer.innerHTML = keys[counter];
		}
	});

	console.log(keys);
	console.log(values);
	console.log(keys[counter]);

	//functions for left and right arrow, and changing counter
	let leftarrow = document.getElementById("left");
	let rightarrow = document.getElementById("right");
	leftarrow.addEventListener("click", () => {
		if (counter == 0) {
			counter = keys.length - 1;
		} else {
			counter = counter - 1;
		}
		carouselcontainer.innerHTML = keys[counter];

		console.log(counter);
		checkDots();
		return counter;
	});

	rightarrow.addEventListener("click", () => {
		if (counter == keys.length - 1) {
			counter = 0;
		} else {
			counter = counter + 1;
		}
		carouselcontainer.innerHTML = keys[counter];
		console.log(counter);
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
				let thisdot = document.getElementById("dots" + i);
				thisdot.style.backgroundColor = "red";
			}
		}
	}
}

//check whatever image index is currenty in the div, then make
