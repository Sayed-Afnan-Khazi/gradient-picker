var current = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var direction = document.querySelector("#direction");
var randomButton = document.querySelector("#randomize")


function setRadialGradient() {
	newBackground = "radial-gradient("+color1.value+","+color2.value+")";
	body.style.background = newBackground;
	current.textContent = newBackground;
}
function setGradient() {
	if (direction.value === "radial") {
		setRadialGradient();
	} else {
		newBackground = "linear-gradient("+direction.value+","+color1.value+","+color2.value+")";
		body.style.background = newBackground;
		current.textContent = newBackground;
	}
}

function getRanHexColor() {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return '#'+result.join('');
}

function getRanDirection() {
	var randIndex = Math.floor(Math.random() * 5);
	var directions = ["to right","to bottom","to bottom right","to bottom left","radial"];
	return directions[randIndex];
}

function randomize() {
	var randColor1 = getRanHexColor();
	var randColor2 = getRanHexColor();
	color1.value = randColor1;
	color2.value = randColor2;
	direction.value = getRanDirection();
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener("input", setGradient);

randomButton.addEventListener("click",randomize);


