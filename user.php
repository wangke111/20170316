<?php
	header("content-type","text/html;charset=utf-8");
	$telphone = $_POST['telphone'];
	$userPass = $_POST['userPass'];
	$email = $_POST['email'];
	echo($telphone.$userPass.$email);
	//建立连接
	$conn = mysql_connect("localhost:3306","root","root");
	if($conn){
		echo("连接成功");
	}else{
		echo("连接失败");
	}
	//2、选择数据库
	mysql_select_db("user",$conn);
	//3、执行语句（插入数据）
	$sqlStr = "insert into userInfo(telphone,userPass,email)
   values('".$telphone."','".$userPass."','".$email."')";
   
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);

?>
