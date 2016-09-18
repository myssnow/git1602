$(function(){
	var page;
	huoqu(1);
	$(".fen").on("click","button",function(){
		page=$(this).html();
		$("tbody").html("");
		huoqu(page);
	})
	function huoqu(page){
		$.ajax({
		type:"get",
		url:"../../product/GetProductsByPage_get?pagesize=4&pageindex="+page+"&type=1",
		data:{
			
		},	
		
		success:function(data){
			console.log(data);
			$.each(data, function(index,value) {
				
			var dataStr=eval("("+value.Data+")");
			console.log(dataStr);
			var oTR=$("<tr style='border-color: #C7254E;'></tr>");
			var oTd1=$("<td class='col-md-2' style='border-color: #C7254E;'></td>");
			var oTd2=$("<td class='col-md-2' style='border-color: #C7254E;'></td>");
			var oTd3=$("<td class='col-md-2' style='border-color: #C7254E;'></td>");
			var oTd4=$("<td class='col-md-2' style='border-color: #C7254E;'></td>");
			var oTd7=$("<td class='col-md-2' style='border-color: #C7254E;'></td>");
			var oTd5=$("<td class='col-md-1' style='border-color: #C7254E;'></td>");
			var oTd6=$("<td class='col-md-1' style='border-color: #C7254E;'></td>");
			oTd1.html(dataStr.name);
			oTd2.html(dataStr.hao);
			oTd3.html(dataStr.shi);
			oTd4.html(dataStr.tutao);
			oTd7.html(dataStr.pic);
			var oInput1=$("<input />");
			oInput1.attr("type","button");
			oInput1.attr("id","delete");
			oInput1.val("删除");
			oInput1.css({
				"background":"#8B4513",
				"width":"100%",
				"height":"100%"
			});
			oInput1.on("click",function(){
				$(this).parent().parent().remove();
		 	$.ajax({
		 		type:"get",
		 		url:"../../product/DeleteProductById_get",
		 		data:{
		 			"id":dataStr.name
		 		},
		 		success:function(){
		 			
		 		},
		 		error:function(){
		 			alert(0);
		 		},
		 		dataType:"json"
		 		});
			});
			
			oTd5.append(oInput1);
			var oInput2=$("<input />");
			oInput2.attr("type","button");
			oInput2.attr("id","add");
			oInput2.val("修改");
			oInput2.css({
				"background":"#8B4513",
				"width":"100%",
				"height":"100%"
			});
			oInput2.on("click",function(){
		 	
		 	var name=$(this).parent().siblings().eq(0).text();
 			var shanghao=$(this).parent().siblings().eq(1).text();
 			var shichangjia=$(this).parent().siblings().eq(2).text();
 			var tutaojia=$(this).parent().siblings().eq(3).text();
 			var pic=$(this).parent().siblings().eq(4).text()
 			
		 	window.location.href="shangpintianjia.html?name="+name+"&hao="+shanghao+"&shi="+shichangjia+"&tutao="+tutaojia+"&pic="+pic;
		 	
	 });
			oTd6.append(oInput2);
			oTR.append(oTd1);
			oTR.append(oTd2);
			oTR.append(oTd3);
			oTR.append(oTd4);
			oTR.append(oTd7);
			oTR.append(oTd5);
			oTR.append(oTd6);
			$("tbody").append(oTR);
//			var str="";
//			str="<tr><td>"+dataStr.name+"</td>"
//			str+="<td>"+dataStr.email+"</td>"
//			str+="<td>"+dataStr.phone+"</td>"
//			str+="<td><input type='button'  id='delete' value='删除'onclick=''></td>"
//			
//			str+="<td><input type='button'  id='xiu' value='修改'></td></tr>"
//			$("table").append(str);			
			
			
		});
		},
		dataType:"json",
		async:true
		
		
	});
	}
})

	