RandomGreet();
function getRandomGreet(number) {
	var map = new Map();
	map.set(1,"Chào bạn");
	map.set(2,"Hân hành chào bạn");
	map.set(3,"Rất vui được gặp bạn");
	map.set(4,"Chúc bạn một ngày tốt lành");
	map.set(5,"Thân chào bạn");
	return map.get(number);
}
function RandomGreet() {
	var number = Math.floor(Math.random()*5+1);
	var greet  = getRandomGreet(number);
	var p = document.getElementsByClassName("greeting")[0];
	if(greet!=null){
		p.innerHTML=greet;
	}
	else{
		p.innerHTML="Xin chào bạn ạ";
	}
}
