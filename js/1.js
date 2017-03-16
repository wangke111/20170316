window.onload = function(){
// banner 轮播图	
var _li = document.getElementById("imgList").getElementsByTagName("li");
var li = document.getElementById("list").getElementsByTagName("li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var banner = document.getElementById("banner");
var m=0;
var timer;
function changes(){
	_li[m].style.display = "block";
	_li[m].getElementsByTagName("img")[0].style.opacity = 0;
	move(_li[m].getElementsByTagName("img")[0],{"opacity":"1"});
	for (var i=0;i<_li.length;i++) {
		li[i].className = "";
	}
	li[m].className = "bg";
}
function autoPlay(){
	timer = setInterval(function(){
		for (var i=0;i<_li.length;i++) {
		_li[i].style.display = "none";
		}
		m++;
		if(m==_li.length){
			m = 0;
		}
		changes();
	},2000)
}
autoPlay();

banner.onmouseover = function(){
	clearInterval(timer);
}
banner.onmouseout = function(){
	autoPlay();
}
// 上一张按钮点击
prev.onclick = function(){
	for (var i=0;i<_li.length;i++) {
		_li[i].style.display = "none";		
	}
	m--;
	if(m==-1){
		m=_li.length-1;
	}
	changes();
}
// 下一张按钮点击
next.onclick = function(){
	for (var i=0;i<_li.length;i++) {
		_li[i].style.display = "none";
	}
	m++;
	if(m==_li.length){
		m= 0;
	}
	changes();
}
for (var i=0;i<li.length;i++) {
	li[i].index = i;
	li[i].onmouseover = function(){
		for (var j=0;j<li.length;j++) {
			li[j].className = "";
			_li[j].style.display = "none";
		}
		this.className = "bg"
		m = this.index;
		changes();
	}
}
//商品选项卡
$(".goodsList .aa").each(function() {
    $(this).on("mouseover", function() {
        $(this).parent().siblings().removeClass("show");
    $(this).parent().siblings().eq($(this).index()+1).addClass("show");
    })
});	

// 主页更多的点击
$(".more").mouseover(function(){
	$(".more").css({background:"#ffffff",color:"#000000"});
});
$(".more").mouseout(function(){
	$(".more").css({background:"#000000",color:"#ffffff"})
})


// 导航选项卡
$("nav .aa1").click(function(){
	$(".navTab1").slideDown("slow");
});

$("nav .aa1").mouseout(function(){
	$(".navTab1").slideUp("slow");
})

$("nav .aa2").click(function(){
	$(".navTab2").slideDown("slow");
});
$("nav .aa2").mouseout(function(){
	$(".navTab2").slideUp("slow");
})


$("nav .aa3").click(function(){
	$(".navTab3").slideDown("slow");
});
$("nav .aa3").mouseout(function(){
	$(".navTab3").slideUp("slow")
});


// 登录页面
$("#enter").click(function(){
	$("#enterInit").slideToggle("slow");
});

// 注册页面
$("#enroll").click(function(){
	$("#enrollInit").slideToggle("slow");
})

// 注册添加用户
//$(function(){
//$("#enroll-bth").click(function(){
//	$.post("user.php",{
//		"telphone":$("#tel").val(),
//		"userPass":$("#pwd").val(),
//		"email":$("#eml").val()
//	},
//	function(data){
//		alert("注册账号成功");
//	//	window.location.href
//	
//	})
//});

//	用户登录页面
//	$("#dl").click(function(){
//		$.post("dl.php",{
//			"telphone":$("#telphone").val(),
//			"userPass":$("#userPass").val()
//		},function(Data){
//			if (Data.indexOf("1")>-1) {
//				alert("登录成功");
//			} else{
//				alert("登陆失败");
//			}
//		});
//	});
//})



}
