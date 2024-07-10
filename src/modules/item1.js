let thing = ["I am thing1", "I am thing2"];
let image1 = "url(../src/images/stardewvalley.jpg)";
let image2 = "url(../src/images/dog.jpeg)";
let image3 = "url(../src/images/halo.webp)";

//let image1 = new Image(100, 100);

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
