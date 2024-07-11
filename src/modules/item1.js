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
		let carouseldots = document.getElementById("carouseldots");
		carouseldots.append(dot);
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

		return counter;
	});
})();
