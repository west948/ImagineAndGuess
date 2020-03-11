function ans (a) {
	var ansW = a.toString();
	if (ansW == "самолет"|| ansW == "Самолет") {
		document.getElementById("minCenter").setAttribute("src", "img/3/32_main.jpeg");
		document.getElementById("minCenter").setAttribute("id", "bigCenter");
} else {
	location.reload();
}

	document.getElementById("next").disabled=false;
	document.getElementById("next").setAttribute("style", "display:block");
	var color = document.getElementById("next");
	color.textContent = "Next>>";
	color.setAttribute('class', "next2");

}
