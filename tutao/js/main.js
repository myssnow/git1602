$(document).ready(function(){
//	$("#gou").fadeOut();
	$("#jiezhang").mouseenter(function(){
		$("#gou").fadeIn().css({
			
			"transform":"translateY(0)",
			"transition":"0.5s"
		});
		$("#tu1").css({
		"transform":"rotate(90deg)",
		"transition":"0.3s"
	})
	}).mouseleave(function(){
		$("#gou").css({
			"transform":"translateY(10px)",
			"transition":"0.5s"
		}).fadeOut();
		$("#tu1").css({
		"transform":"rotate(0)",
		"transition":"0.3s"
		});
	});
	
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if (parseInt($(window).scrollTop())>200) {
			
			$(".zixun4").css("display","block");
		}else{
			$(".zixun4").css("display","none");
		}
	});
	$("#scoll").click(function(){
		$("body,html").animate({scrollTop:"0px"},300)
	})
	$.ajax({
		type:"get",
		url:"../../product/GetProductsByPage_get?pagesize=100&pageindex=1&type=1",
		data:{
			
		},
		success:function(data){
			var str="";
			$.each(data,function(idnex,value){
			var dataStr=eval("("+value.Data+")");	
			
			str+="<li><div class='right'>";
			str+="<a href='xiangqing.html'>";			
			str+="<img src='img/"+dataStr.pic+"'/>"	;
			str+="<h3>"+dataStr.name+"</h3></a>";
			str+= "<p>￥"+dataStr.tutao+"元</p></div></li>";
			});
			$(".right-list").append(str);
		},
		dataType:"json",
		async:true
	});
})