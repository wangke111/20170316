$(function(){
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
});

//放大镜
$(".shoe").mouseover(function(){
	$("#small").css({display:"block"});
	$("._img").css({display:"block"});
});

$(".shoe").mouseout(function(){
	$("#small").css({display:"none"});
	$("._img").css({display:"none"});
});
$(".shoe").mousemove(function(e){
	let evt = e||window.event;
	let l,t;
	let w = $(".shoe").width();
	let h = $(".shoe").height();
	let oW = $("#small").width();
	let oH = $("#small").height();
	let bigW = $(".bagImg").width();
	let bigH = $(".bagImg").height();
	
if(evt.pageX - $(".shoe").offset().left<oW/2){
		l = 0; 
}else if(evt.pageX - $(".shoe").offset().left>(w-oW/2)){
		l = w-oW;
}else{
		l = evt.pageX - $(".shoe").offset().left-oW/2; 	
	}
if(evt.pageY - $(".shoe").offset().top<oH/2){
		t = 0; 
}else if(evt.pageY - $(".shoe").offset().top>(h-oH/2)){
		t = h-oH;
}else{
		t = evt.pageY - $(".shoe").offset().top-oH/2; 	
	}
			$("#small").css({left:l,top:t});
			$(".bagImg").css({left:-l*bigW/w,top:-t*bigH/h});
});

// 物品选项卡
$("#ulImg li").click(function(){  
	$("#ulImg li").removeClass("_li");
	$(this).addClass("_li")
    let index = $("#ulImg li").index(this);
    $(".bagShoe").removeClass("_img");
    $(".bagShoe").eq(index).addClass("_img");
 	$(".aa").removeClass("show");
	$(".aa").eq(index).addClass("show");
   });


// 可能喜欢轮播图
$(".right-span").click(function(){
	let liWidth =$(".imgList ul li").width();
	$(".imgList ul").animate({left:liWidth*-4-50},800);
});

$(".left-span").click(function(){
	let liWidth =$(".imgList ul li").width();
	$(".imgList ul").animate({left:0},800);
});

// 尺码对照表
$("#size").click(function(){
	$(".sizeTable img").animate({
		height:"100%",
		width:"100%"
		},1000);
});
$("#size").mouseout(function(){
	$(".sizeTable img").animate({
		height:"0%",
		width:"0%"
		},1000);
});

//	点击加入购物车功能
	$("#addCat").click(function(){
		$.get("addShoppingCart.php",function(data){
		//	console.log(data);
			$.get("saveInfo.php",{
			"goodsName"	:$("#goodsName").html(),
			"goodsNum":$("#numCase").val(),
			"goodsSize":$("#shoeSize").val()
		},function(Data){
		//	console.log(Data);
			if (Data.indexOf("1")>-1) {
				alert("111");
			} else{
				$.get("saveInfo.php",function(dataObj){
				var DataObj=eval(dataObj);
				console.log(DataObj);
					
				})
			}
		})	
	
	});
	});
	
		




})