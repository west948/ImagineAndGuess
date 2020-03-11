function ans (a) {
	var ansW = a.toString();
	if (ansW == "фара"|| ansW == "Фара") {
		document.getElementById("minCenter").setAttribute("src", "img/6/32_main.jpg");
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
