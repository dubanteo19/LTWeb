function submitForm2() {
	var userName = $("input[name='userName']").val();
	var password = $("input[name='password']").val();
	console.log(password);
	var userNameE = $("p[name='userNameE']");
	var passwordE = $("p[name='passwordE']");
	var status = $("p[name='status']");
	var hint = $("p[name='hint']");
	passwordE.hide();
	userNameE.hide();
	hint.hide();
	status.hide();
	if(userName==""){
		userNameE.html("Vui lòng điền username hoặc email");
		userNameE.show();
		return;
	}
	if(password==""){
		passwordE.html("Vui lòng điền mật khẩu");
		passwordE.show();
	}
	else if(userName=="admin" && password=="admin"){
	status.css("color","green");
	status.html("Đăng nhập thành công");
		status.show();
	}
	else {
		hint.html("Tên người dùng mẫu là admin, mật khẩu admin");
		status.css("color","red");
		status.html("Sai tên đăng nhập hoặc mật khẩu! ");
		status.show();
		hint.show();
		}	

}