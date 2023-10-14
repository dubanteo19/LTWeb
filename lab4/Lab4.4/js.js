function count() {
	var text = document.getElementById("text").value;
	var textArea = document.getElementsByClassName("textarea")[0].value.split(" ");
	if(text=="" || textArea ==""){
		alert("Vui lòng điền đủ thông tin");
		return;
	}
	var count=0;
	for (var i = 0; i < textArea.length; i++) {
		if(text==textArea[i]){
			count++;
			console.log(count);
		}
	}
	var time = document.getElementsByClassName("time")[0];
	time.innerHTML="\""+text+"\""+" xuất hiện "+ count+" lần trong đoạn văn";

}
function generateEx() {
	var text = document.getElementById("text")
	var textArea = document.getElementsByClassName("textarea")[0];
	textArea.value="Quê hương em là một ngôi làng nhỏ phía bên bờ dòng sông Hồng. Nơi đây có cánh đồng lúa rộng thẳng cánh cò bay, có vườn cây trĩu ăn quả ngọt, có những luống rau xanh mướt mắt…Chiều chiều, bên bờ đê, lại bay lên những cánh diều của lũ trẻ đủ hình thù màu sắc. Thấp thoáng xa xa những hơi khói mỏng manh bay lên từ căn bếp nhỏ. Vọng lại văng vẳng tiếng cười, tiếng nói của những gia đình nhỏ mà ấm áp. Ôi! Sao mà bình yên đến thế!";
	text.value="có";	
}