$(document).ready(function(){
	var error = $(".error").hide();
})
function submitForm1() {
	var error = $(".error").hide();
	var fullName = $("input[name='full-name']").val();
	var email = $("input[name='email']").val();
	var phone =$("input[name='phone']").val();
	var service = $("select[name='service']").val();
	var message = $("textarea[name='message']").val();
	var flag = true;
	flag=flag&&validateFullName(fullName);
	flag=flag&&validateEmail(email);
	flag=flag&&validatePhone(phone);
	flag=flag&&validateService(service);
	flag=flag&&validateMessage(message);
	if(flag){
		alert("Submit thành công");
	}
}
function validateMessage(message){
	if(message==""){
		var message = $("p[name='messagE']");
		message.html("Vui lòng nhập tin nhắn");
		message.show();
		return false;
	}
	return true;
}
function validateService(service){
	if(service=="Please chooses"){
		var service = $("p[name='serviceE']");
		service.html("Vui lòng chọn ít nhất một dịch vụ");
		service.show();
		return false;
	}
	return true;
}
function validatePhone(phone){
	if(/0+[0-9]{9,10}$/.test(phone)){
		return true;
	}
	else{
		var emailE = $("p[name='emailE']");
		var phoneE = $("p[name='phoneE']");
		if(emailE.is(":visible")){
			phoneE.css("margin-left","70px");
		}
		else{
			phoneE.css("margin-left","280px");
		}
		phoneE.html("Vui lòng nhập đúng định dạng SĐT Việt Nam");
		phoneE.show();
		return false;
	}	
}
function validateEmail(email){
	if(/\S+@\S+.\S+$/.test(email)){
		return true;
	}
	else{
		var emailE = $("p[name='emailE']");
		emailE.html("Vui lòng nhập đúng định dạng email");
		emailE.show();	
		return false;
	}
}
function validateFullName(fullName) {
	if(fullName===""){
		var fullNameE = $("p[name='fullNameE']");
		fullNameE.html("Vui lòng điền họ và tên");
		fullNameE.show();
		return false;
	}
	return true;
}
