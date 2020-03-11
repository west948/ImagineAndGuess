/* variables */

var Tolose = 2;

/*function 1 */
function changePic () {
	var change = document.getElementById("mainPic");
	change.setAttribute('src', "img/2/1400.jpg");

	document.getElementById("next").disabled=false;

	var color = document.getElementById("next");
	color.textContent = "Next>>";
	color.setAttribute('class', "next2");
}
/*function 2 */

function wrongAnswer() {
	if (Tolose==1) {
		var cla = document.getElementById("hidd");
		cla.setAttribute('class', "off");
		document.getElementById('disp').setAttribute("class", "Disp");
	}
		Tolose--;
		var miss = document.getElementById('miss');
		miss.textContent = "Попыток: "+Tolose;
}

/*function 3 */

function rld () {
	location.reload();
}