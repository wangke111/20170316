$(function(){
$("#enroll-bth").click(function(){
	$.post("user.php",{
		"telphone":$("#tel").val(),
		"userPass":$("#pwd").val(),
		"email":$("#eml").val()
	},
	function(data){
		alert("注册账号成功");
	//	window.location.href
	
	})
});
});