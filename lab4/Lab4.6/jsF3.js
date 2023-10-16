var fullName = $("input[name='fullName']");
var email = $("input[name='email']");
var password = $("input[name='password']");
var day = $("input[name='day']")
var month = $("input[name='month']")
var year = $("input[name='year']")
var male = $("input[name='male']")
var female = $("input[name='female']")
var cardNumber = $("input[name='cardNumber']")
var cvc = $("input[name='cvc']")
password.focusout(()=>{
	validatePassword(password.val());
});
email.focusout(()=>{
	validateEmail(email.val());
})
fullName.on("focusout",()=> {
	validateFullName(fullName.val());
});
day.focusout(()=>validateDob());
month.focusout(()=>validateDob());
year.focusout(()=>validateDob());
male.focusout(()=>{
	validateGender();
})
female.focusout(()=>{
	validateGender();
})
cardNumber.focusout(()=>{
	validateCardNumber(cardNumber.val());
})
cvc.focusout(()=>{
	validateCVC(cvc.val());
})
function validateCVC(cvc){
	var cvcE= $("p[name='cvcE']");
	cvcE.hide();
	if(/^\d{3}$/.test(cvc)){
		return true;
	}
	else{
		showError(cvcE,"Sai định dạng số cvc, số cvc có 3 số");
		return false;
	}
}
function validateCardNumber(cardNumber){
		var cardNumberE= $("p[name='cardNumberE']");
		cardNumberE.hide();
	if(/^\d{12}$/.test(cardNumber)){
		return true;
	}
	else
		showError(cardNumberE,"Sai định dạng số thẻ, số thẻ gồm 12 số!");
		return false;
}
function validateGender() {
	var male = $("input[name='male']").val();
	var female = $("input[name='female']").val();
	var genderE= $("p[name='genderE']");
	genderE.hide();
	if(male.toUpperCase()=="MALE" || female.toUpperCase()=="FEMALE"){
		return true;
	}
	else{
		showError(genderE,"Vui lòng nhập giới tính");
	}
}
function validateDob() {
	var day = $("input[name='day']").val();
	var month = $("input[name='month']").val();
	var year = $("input[name='year']").val();
	var dobE = $("p[name='dobE']");
	dobE.hide();
	if(!(day>0 && day<=31)){
		showError(dobE,"Sai định dạng ngày");
	}
	else if(!(month>0 && month<=12)){
		showError(dobE,"Sai định dạng tháng");
	}
	else if(!(year>1900 && year<=2023)){
		showError(dobE,"Sai định dạng năm");
	}
}

function validateFullName(fullName) {
	var fullNameE = $("p[name='fullNameE']");
	if(fullName==""){
		showError(fullNameE,"Vui lòng nhập họ và tên");
		return false
	}
	else{
		fullNameE.hide();
		return true;
	}
}
function validateEmail(email){
	var emailE = $("p[name='emailE']");
	if(/\S+@\S+.\S$/.test(email)){
		emailE.hide();
		return true;
	}
	else{
		showError(emailE,"Vui lòng nhập đúng định dạng email");
		return false;
	}

}
function validatePassword(password){
	var passwordE = $("p[name='passwordE']");
	passwordE.hide();
	if(password==""){
		showError(passwordE,"Vui lòng nhập mật khẩu");
		return false
	}
	else{
		return true;
	}
}
function showError(error,meesage) {
	error.html(meesage);
	error.show();
}