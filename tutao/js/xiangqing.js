$(document).ready(function(){
	$("#mark").mouseover(function(){
		$("#quyu").css("display","block");
		$("#fangda").css("display","block")
		
	}).mouseout(function(){
//		clearInterval(timer);
//		var timer=setInterval(function(){
			$("#quyu").css("display","none");
			$("#fangda").css("display","none");
//		},0.1);
//		$("#quyu").mouseover(function(){
//			$("#quyu").css("display","block")
//			$("#fangda").css("display","block");
//			clearInterval(timer);
//		}).mouseout(function(){
//			clearInterval(timer);
//			$("#quyu").css("display","none")
//			$("#fangda").css("display","none");
//			
//		});
//		$("#fangda").mousemove(function(){
//			$("#fangda").css("display","block");
//			clearInterval(timer);
//		}).mouseout(function(){
//			$("#fangda").css("display","none");
//			clearInterval(timer);
//		})
//		
	}).mousemove(function(e){
		var e=e||window.event;
		
		var l=e.clientX-$("#view").offset().left-$("#quyu").outerWidth()/2;
		var t=e.clientY-$("#view").offset().top+200-$("#quyu").outerHeight()/2;
		
		if(l<0){
			l=0;
		}
		else if(l>$("#view").offsetWidth-$("#quyu").offsetWidth)
		{
			l=$("#view").offsetWidth-$("#quyu").offsetWidth;
		}
		if(t<0){
			t=0;
		}
		else if(t>$("#view").offsetHeight-$("#quyu").offsetHeight){
			t=$("#view").offsetHeight-$("#quyu").offsetHeight;
		}
		$("#quyu").css({
			"left":l+"px",
			"top":t+"px"
		});
		
		var percentX=l/($("#view").outerWidth()-$("#quyu").outerWidth());
		var percentY=t/($("#view").outerHeight()-$("#quyu").outerHeight());
		var ll=-percentX*($("#big").outerWidth()-$("#fangda").outerWidth())+"px";
		var tt=-percentY*($("#big").outerHeight()-$("#fangda").outerHeight())+"px";
		$("#big").css({
			"left":ll,
			"top":tt
		});
		
	});
	$("#btn2").click(function(){
		$("#tan-box").css("display","block");
		$("#tan").css("display","block");
		$("#tankuang").css("display","block");
	})
	$("#close").click(function(){
		$("#tan-box").css("display","none");
		$("#tan").css("display","none");
		$("#tankuang").css("display","none");
	});
	$(".shopbtn").click(function(){
		$(".gowu-box").css("display","block");
		$(".gowu").css("display","block");
	})
	$(".back").click(function(){
		$(".gowu-box").css("display","none");
		$(".gowu").css("display","none");
	});
	$(".xiangqing-pingjia").click(function(){
		$(".xx").css("display","none");
		$(".xiangqing-pingjia").css({
			"height":"51px",
			
			"background":"white"
		});
		$(".xiangqing-shop").css({
			"background":"none",
			"height":"50px"
		});
	});
	$(".xiangqing-shop").click(function(){
		$(".xx").css("display","block");
		$(".xiangqing-shop").css({
			
			"height":"51px",
			"background":"white"
		});
		$(".xiangqing-pingjia").css({
			"background":"none",
			"height":"50px"
		});
	});
	var src;
	
	var name=$.query.get("name");
	var pic;
	console.log(name);
	$.ajax({
		type:"post",
		url:"../../product/GetProductById_post",
		data:{
			"id":name
		},
		success:function(data){
			console.log(data);
			var datajson=data.Data;
			var dataAr=eval("("+datajson+")");
			pic=dataAr.tutao;
			src=dataAr.pic;
			$("#img1 img").attr("src","img/"+dataAr.pic);
			$("#fangda img").attr("src","img/"+dataAr.pic);
			$(".img-list li a img").attr("src","img/"+dataAr.pic);
			$(".xinxi dt h2").html(dataAr.name);
			$(".e1").html(dataAr.hao);
			$(".quxiao p").html(dataAr.shi);
			$("#unit").html(dataAr.tutao);
			
		},
		error:function(){
			alert("ajax error")
		},
		dataType:"json"
		
	});
	$.ajax({
		type:"get",
		url:"../../product/GetProductsByPage_get?pagesize=100&pageindex=1&type=1",
		data:{
			
		},
		success:function(data){
			var str=""
			$.each(data,function(index,value){
				var dataStr=eval("("+value.Data+")");
				str+="<li><a href='#'>";
				str+="<img src='img/"+dataStr.pic+"'/>";
				str+="<span>"+dataStr.name+"</span>";
				str+="<i>￥"+dataStr.tutao+"元</i></a></li>";
			});
			$(".shopping-list").append(str);
		},
		dataType:"json",
		async:true
	});
	var unit=pic;
	var shu=parseInt($("#txt").val());
	$("#jian").click(function(){
		if(parseInt($("#txt").val())==1){
			alert("您至少购买1件商品");
		}else{
			shu=parseInt($("#txt").val())-1;
			$("#txt").val(shu);
			
			unit=parseInt($("#unit").html())-parseInt(pic);
			
			$("#unit").html(unit);
		}
		
	});
	
	$("#jia1").click(function(){
		shu=parseInt($("#txt").val())+1;
		$("#txt").val(shu);
		unit=parseInt($("#unit").html())+parseInt(pic);
			
			$("#unit").html(unit);
	});
	
//	$(".shopbtn").click(function(){
//		
//		var count=$("#txt").val();
//		var name=$(".xinxi dt h2").html();
//		var	tutao=$("#unit").html();
//		var pic=$("#img1 img").src;
//		console.log(pic);console.log(count);
//		$.ajax({
//			type:"post",
//			url:"../../product/CreateUpdateProduct_post",
//			data:{
//				"id":name
//			},
//			async:true
//		});
//	})
	$(".shopbtn").click(function(){
//		var pDl=document.createElement("dl");
//		var pDt=document.createElement("dt");
//		var pDd=document.createElement("dd");
//		var oPa=document.createElement("a");
//		var oPa2=document.createElement("a");
//		var pImg=document.createElement("img");
//		var oP=document.createElement("p");
//		pImg.attr("src","img/"+src);
//		pImg.style.width="40px";
//		pImg.style.height="40px";
//		pImg.style.border="1px soild #ccc";
//		oPa.appendChild(pImg);
//		oPa.attr("href","../xiangqing.html?name="+name);
//		pDt.appendChild(oPa);
//		pDt.style.float="left";
//		pDt.style.width="42px";
//		pDl.appendChild(pDt);
//		oPa2.style.color="#666";
//		oPa2.attr("href","../xiangqing.html?name="+name);
//		oPa2.style.height="20px";
//		pDd.appendChild(oPa2);
//		oP.innerHTML=pic+"x"+shu;
//		pDd.appendChild(oP);
//		
		var pName=name;
		var imgsrc=src;
		var price=pic;
		var count=shu;
		var  zong=unit;
		var dataObj={
			"name":pName,
			"img":imgsrc,
			"price":price,
			"count":count,
			"zcount":zong
		}
		var datajsonstr=JSON.stringify(dataObj);
		$.ajax({
			type:"post",
			url:"../../product/CreateUpdateProduct_post",
			data:{
				"id":pName,
				"datajson":datajsonstr,
				"Type":2
			},
			success:function(data){
				if(data==1){
					alert("创建成功")
				}
			},
			error:function(){
				alert("ajax error");
			},
			dataType:"json",
			
			async:true
		});
		$(".count2").html(count);
	});
	
})
//str+="<div class='shop-img'>"
//			str+="<div class='img-view' id='view'>"
//			str+="<a href='#' id='img1'>"
//			str+="<img src=img"+dataAr.pic+"/></a>"
//			str+="<a href='#' id='mark'><div class='quyu' id='quyu'></div></a>"
//			str+="<div class='fangda' id='fangda'>"
//			str+="<img src="+dataAr.pic+" id='big'/></div></div>"
//			str+="<div class='item-img'>"
//			str+="<a href='#' class='prev'></a>"
//			str+="<a href='#' class='next'></a>"
//			str+=<div class="img-box">
//							<ul class="img-list">
//								<li><a href="#"><img src="img/56_thumb_G_1466636909232.jpg"/></a></li>
//							</ul>
//						</div>
//					</div>
//				</div>