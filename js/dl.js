$(function(){
		$("#dl").click(function(){
		$.post("dl.php",{
			"telphone":$("#telphone").val(),
			"userPass":$("#userPass").val()
		},function(Data){
			if (Data.indexOf("1")>-1) {
				alert("登录成功");
			} else{
				alert("登陆失败");
			}
		});
	});
});