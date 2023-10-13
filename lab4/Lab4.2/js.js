function reset() {
	var inputs = document.getElementsByClassName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value="";
	}

}
function doSolve(a,b,c) {
	var lamda= (b*b) - (4*a*c);
	var result="";
	if(lamda<0){
		result="Phương trình vô nghiệm"
	}
	else if(lamda===0){
		var x = -(b/(2*a));
		result="Phương trình có nghiệm kép là: "+x;
	}
	else{
		var x1=(-b+Math.sqrt(lamda))/(2*a);
		var x2=(-b-Math.sqrt(lamda))/(2*a);
		x1=Number(x1).toFixed(2);
		x2=Number(x2).toFixed(2);
		result="Phương trình có nghiệm x1:"+x1+" x2:"+x2;
	}
	return result;
}
function validateNumber(number) {
	return (!isNaN(number)&&number.length!==0)	
}

function solve() {
	var a = document.getElementById("1").value;
	var b = document.getElementById("2").value;
	var c = document.getElementById("3").value;
	if(validateNumber(a)&&validateNumber(b)&&validateNumber(c)){
		var result =doSolve(a,b,c);
		document.getElementById("result").innerHTML=result;}
	else{
		document.getElementById("result").innerHTML="Vui lòng nhập số";
	}
}