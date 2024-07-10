let thing = ["I am thing1", "I am thing2"];
let image1 = "url(../src/images/stardewvalley.jpg)";
let image2 = "url(../src/images/dog.jpeg)";
let image3 = "url(../src/images/halo.webp)";

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
	let leftarrow = document.getElementById("left");
	let rightarrow = document.getElementById("right");
	leftarrow.addEventListener("click", () => {
		alert("left has been clicked");
	});

	rightarrow.addEventListener("click", () => {
		alert("right has been clicked");
	});
})();
