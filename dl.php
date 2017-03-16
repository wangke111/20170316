<?php	
	//1、接收客户端传来的数据（用户名）
	$telphone = $_POST['telphone'];
	$userPass = $_POST['userPass'];

	//2、连接数据库，进行查询
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","root");
	//2)、选数据库
	mysql_select_db("user",$conn);
	//3)、执行SQL语句
	$sqlstr = "select * from userInfo where telphone='".$telphone."' and userPass='".$userPass."'";
	$result = mysql_query($sqlstr,$conn);
	
	$result = mysql_query($sqlstr,$conn);
	
	$rows = mysql_num_rows($result);
	
	//echo($rows);
	//4)、拆桥（关闭数据库）
	mysql_close($conn);
	
	///3、根据查询结果返回（1或 0）
	echo($rows);
	
	
	
?>