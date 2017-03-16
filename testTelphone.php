<?php
//		1、接受用户信息
//	$telphone = $_GET['telphone'];
//
//	//	2、连接数据库 进行查询
//	// 	2.1 进行搭建服务器连接
//	$conn = mysql_connect("localhost","root","root");
//		
//	//	2.2、选择连接的数据库
//	mysql_select_db("user",$conn);
//	
//	//	3、sql语句的执行
//	// 	行数查询
//	$sqlStr = "select * from userInfo where telphone'".$telphone."'";
//	// 	列数查询
//	$sqlString = "select * from userInfo where userPass'".$userPass."'";
//	
//	$result = mysql_query($sqlStr,$conn);
//	
//	$resulting = mysql_query($sqlString,$conn);
//	//	行数
//	$query_num = mysql_num_rows($result);
//	//	列数
//	$query_cols = mysql_num_fields($resulting);
//	
//	//	4、关闭数据库
//	mysql_close($conn);
//	
	// 	根据查询结果返回（1或0）
	//	each($row);
	
	$telphone = $_GET['telphone'];
	//2、连接数据库，进行查询
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","root");
	//2)、选数据库
	mysql_select_db("user",$conn);
	//3)、执行SQL语句
	$sqlstr = "select * from userInfo where telphone='".$telphone."'";	
	
	$result = mysql_query($sqlstr,$conn);
	
	$rows = mysql_num_rows($result);
	
	//echo($rows);
	//4)、拆桥（关闭数据库）
	mysql_close($conn);
	
	//3、根据查询结果返回（1或 0）
//	echo($rows);	
		
?>