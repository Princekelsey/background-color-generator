const text = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("background");


const setColor = ()=> {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	text.textContent = body.style.background + ";";
};

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

window.addEventListener("load", setColor);

// window.onload = function(){
// 	setColor();
// };



