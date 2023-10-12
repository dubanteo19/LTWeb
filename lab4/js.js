var btns = document.getElementsByClassName("btn");
var body = document.getElementsByTagName("BODY")[0];
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var color = this.className.split(" ")[1];
		changeColorTo(color)
	})
}
function changeColorTo(color) {
	console.log(color)
	body.setAttribute("style", "background-color:"+color)	
}