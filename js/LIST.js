$(function(){
	// 筛选树形菜单
	$("#LIST-left ul li span").click(function(){
		$(this).next().toggle(1000);			
	});
	
	// json文件转化为商品列表
//	$.getJSON("json/goods.json",showData);
//	
//	function showData(data){
//		let dataObj = data;
//		var arr = dataObj.Goods;
//		var htmlStr = "";
//		for (let i=0;i<arr.length;i++) {
//			let GoodInfo = arr[i].GoodInfo;
//			for(let j=0;j<GoodInfo.length;j++){
//
//htmlStr+="<dl><dt><img src='"+GoodInfo[j].GoodsImgs+"'/></dt><dd>"
//+GoodInfo[j].GoodsName+"</dd><dd>"+GoodInfo[j].GoodsPrice+"</dd></dl>";
//			}
//		}
//	
//		$("#LIST-right").append(htmlStr);
//	}
		// 	后台传送进来的数据
$.get("getGoodsList.php",function(data){
						var Data=eval(data);
						console.log(data);
					//	let dataObj = Data;
						let arr = Data;
					var htmlStr = "";
					for (let i=0;i<arr.length;i++) {
					//	let goodsId = arr[i].goodsId,
htmlStr+="<dl><dt><img src='"+arr[i].goodsDesc+"'/></dt><dd>"
+arr[i].goodsName+"</dd><dd>￥"+arr[i].goodsPrice+"</dd></dl>";
					}
					$("#LIST-right").append(htmlStr);
					});
	
	
	
	//  点击切换背景
	$("#LIST-right ul li").click(function(){
		let index = $(this).index();
		$("#LIST-right ul li").removeClass("bg");
		$("#LIST-right ul li").eq(index).addClass("bg");
	});
	
	// 鼠标移上出现边框 并改变颜色
	
});