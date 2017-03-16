
	var _ch = document.getElementById("ch");
	var codeEnroll = document.getElementById("code-enroll");
	var B = document.getElementById("code");
	var hint = document.getElementById("hint");
	var tel = document.getElementById("tel");
	var eml = document.getElementById("eml");
	var pwd = document.getElementById("pwd");
	var pwd1 = document.getElementById("pwd1");
	B.innerHTML = "- - - -";
//	验证码切换	
	_ch.onclick = function (){
				code = "";
				codeEnroll.style.backgroundColor = "";
				codeEnroll.style.borderColor = "";
				codeEnroll.value = "";
				var codeLength = 4;//验证码的长度
				var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//随机数
				for(var i = 0; i < codeLength; i++) {	 //循环操作
				var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
				code += random[index];//根据索引取得随机数加到code上
				}
				B.innerHTML = code;//把code值赋给验证码
					}
//	console.log(codeEnroll);
//	console.log(codeEnroll.value);

//	验证码验证
    codeEnroll.onblur = function(){
	var Txt = codeEnroll.value.toUpperCase();
	if(Txt.length<=0 || Txt!==code){
		codeEnroll.style.backgroundColor = "red";	
	}else {
		codeEnroll.style.backgroundColor = "green";
	}
	}
    
    console.log(tel);
  // 	电话正则  
  	tel.onfocus = function(){
  		tel.style.borderColor = "";
  		tel.style.backgroundColor = "";
  		tel.value = "";
  	}
  
	tel.onblur = function(){
		var reg = /^1[0-9]{10}/;
//		var oTel = tel.value;
//		console.log(reg.test(oTel));
		if(reg.test(tel.value)){
		tel.style.backgroundColor = "green";

		}else{
			tel.style.backgroundColor = "red";
			}
		}
	
// 邮箱正则	
	eml.onfocus = function(){
		eml.style.backgroundColor = "";
  		eml.value = "";
	}
	eml.onblur = function(){
		var reg1 = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.(com|cn|edu)$/;
		console.log(reg1.test(eml.value));		
		if(reg1.test(eml.value)){
			eml.style.backgroundColor = "green";
		}else{
			eml.style.backgroundColor = "red"
		}
	}

console.log(pwd);
 //  密码正则
	pwd.onfocus = function(){
		pwd.style.backgroundColor = "";
		pwd.value = "";
	}
	pwd.onblur = function(){
		var reg = /^[0-9A-Za-z]{6,12}/
		console.log(reg.test(pwd.value));		
		if(reg.test(pwd.value)){
			pwd.style.backgroundColor = "green";
		}else{
			pwd.style.backgroundColor = "red"
		}
	}

// 验证密码的正则
	pwd1.onfocus = function(){
		pwd1.style.backgroundColor = "";
		pwd1.value = "";
	}
	pwd1.onblur = function(){
		if(pwd.value == pwd1.value || pwd1.value ==""){
			pwd1.style.backgroundColor = "green";
		}else{
			pwd1.style.backgroundColor = "red";
		}
	}
