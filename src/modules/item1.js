let thing = ["I am thing1", "I am thing2"];
let image1 = "url(../src/images/stardewvalley.jpg)";
let image2 = "url(../src/images/dog.jpeg)";
let image3 = "url(../src/images/greendragon.jpeg)";

export function sayHello() {
	alert(thing[1]);
	carouselcontainer.style.backgroundImage = image2;
}

export function Menu2() {
	carouselcontainer.style.backgroundImage = image1;
}

export function menu3() {
	carouselcontainer.style.backgroundImage = image3;
}

export default (function moveCarousel() {
	let images = [image1, image2, image3];
	let counter = 0;

	//creates dots for carousel and adds them to the page
	for (let i = 0; i < images.length; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("class", "circle");
		dot.setAttribute("id", "dots" + i);
		//function to make dot click and showcase the corresponding image
		dot.addEventListener("click", () => {
			counter = i;
			console.log(counter);
			//need to update image
			carouselcontainer.style.background = images[counter];
			checkDots();

			return counter;
		});
		let carouseldots = document.getElementById("carouseldots");
		carouseldots.append(dot);
		checkDots();
	}
	//sets defaults image to 0
	carouselcontainer.style.backgroundImage = images[counter];
	//functions for left and right arrow, and changing counter

	let leftarrow = document.getElementById("left");
	let rightarrow = document.getElementById("right");
	leftarrow.addEventListener("click", () => {
		if (counter == 0) {
			counter = images.length - 1;
		} else {
			counter = counter - 1;
		}
		carouselcontainer.style.background = images[counter];

		console.log(counter);
		checkDots();
		return counter;
	});

	rightarrow.addEventListener("click", () => {
		if (counter == images.length - 1) {
			counter = 0;
		} else {
			counter = counter + 1;
		}
		carouselcontainer.style.background = images[counter];
		console.log(counter);
		checkDots();
		return counter;
	});
	//resets all dots to gray, then checks the counter number, and makes the dot with that counter ID red
	function checkDots() {
		for (let i = 0; i < images.length; i++) {
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
})();

//check whatever image index is currenty in the div, then make
