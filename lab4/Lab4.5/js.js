var angle = 0
// $(document).ready(setInterval(quay(angle++), 100))

setInterval(quay, 2000);
function quay() {

	angle+=15;
	
	var img = $("#img");
	img.css("transform","rotate("+angle+"deg)");

	console.log(angle);
}