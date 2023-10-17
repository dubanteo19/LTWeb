const numbs = new Set();

// function getNumberOfBtns(){
// 	try {
// 		var numberOfBtns =	prompt("Please enter level", 10); 
// 	} catch(e) {
// 		// alert("Please enter a valid number");
// 		location.reload();
// 	}
// 	if(numberOfBtns>0 && numberOfBtns<65){
// 		return parseInt(numberOfBtns) ;
// 	}
// 	else{
// 		location.reload();
// 		return 1;
// 	}
// }
const numberOfBtns = 64;
while(numbs.size!==numberOfBtns){
	var number =Math.floor(Math.random()*numberOfBtns)+1;
	numbs.add(number);

}
for(const value of numbs){
	$("<button>").attr({
		class:'btn',
		id:value
	}).html(value).appendTo($(".btns"));
}

var current = 0;
$("#1").click(()=>{
		startTimer();
		
});
$(".btn").click(function(){
	
	var message = $(".message");
	var chosen = this.id;
	var chosenJ = $("#"+chosen);
	var currentLabel =$(".current");
	if(chosen-current==1){
		var text = "Current number:";
		currentLabel.html(text+chosen);
		var animation = getRandomAnimations();

		chosenJ.addClass(animation);
		setTimeout(()=>{
			// chosenJ.removeClass(animation);
			chosenJ.css("visibility","hidden");

		},100);
		

		current = chosen;
		message.css("color","green");
	    message.addClass('success');
		message.html("Good job");
		setTimeout(()=>{
			 message.removeClass('success');
		}, 1000);
	}
	else{
		chosenJ.addClass("wobble");
		setTimeout(()=>chosenJ.removeClass("wobble"), 300);


		message.css("color","red");
		message.addClass("false");
		message.html("Sorry wrong number");
		setTimeout(()=>message.removeClass("false"), 1000);
	}
	if(current==numbs.size){
		setTimeout(showWin, 500);
	}
})
function getRandomAnimations() {
	var i = Math.floor(Math.random()*5)+1;
	var re= "";
	switch (i) {
		case 1:
			re= "slideOutDown";
			break;
		case 2:
			re= "zoomOut";
			break;
		case 3:
			re= "rotateOut";
			break;
		case 4:
			re= "fadeOutDown";
			break;
		case 5:
			re= "fadeOutUp";
			break;
			
		default:
			re= "slideOutDown";
			break;
	}
	return re;
}
function showWin(){
	clearInterval(window.timer);
	if(confirm("Congratulation! You've won this game! Your seconds:"+second))
		location.reload()
	else{

	}
}
function startTimer() {
	window.second = 1;
	var secondLabel =$(".time");
	window.timer =setInterval(()=>{
		secondLabel.html("Time:"+second);
		second+=1;
	}, 1000);
}