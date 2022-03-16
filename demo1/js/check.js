//校验格式
function check_name(){
	var name = document.getElementById("name");
	var value = name.value;
	var check = new RegExp("[\\u4E00-\\u9FFF]+","g");
	if(!(value == "" || value == null)){
		if(!check.test(value)){
			name.className = "error";
			name.value = "请输入中文！";
		}
		else{
			name.className = "ok";
		}
	}
	else{
		name.className = "error";
		name.placeholder = "该字段不能为空！";
	}
}
//判断密码是否为空
function check_password(){
	var password = document.getElementById("password");
	var value = password.value;
	if((value == "" || value == null)){
		password.className = "error";
		password.placeholder = "该字段不能为空！";
	}	
	else{
		password.className = "ok"
	}
}

function name_recover(){
	var value =	document.getElementById("name").value;
	if(!(value == "" || value == null)){
		document.getElementById("name").value = "";
	}
}

function password_recover(){
	var value =	document.getElementById("password").value;
	if(!(value == "" || value == null)){
		document.getElementById("password").value = "";
	}
}


function check_form(){
	var name = document.getElementById("name");
	var name_className = name.className;
	var password = document.getElementById("password");
	var password_className = password.className;
	if(name_className == "" || password_className == ""){
		alert("请进行第一次输入登录信息！");
		return false;
	}
	if(name_className == "error" || password_className == "error"){
		alert("请正确输入信息！");
		return false;
	}
	else{
		if(!(name.value == "管理员" && password.value == "admin")){
			alert("登录信息错误！请重新输入！");
			return false;
		}
		else{
			return true;
		}
	}
}