$(function(){
	$.ajax({
		type:"get",
		url:"../../product/GetProductsByPage_get?pagesize=100&pageindex=1&type=0",
		data:{
			
		},	
		
		success:function(data){
			console.log(data);
			$.each(data, function(index,value) {
				
			var dataStr=eval("("+value.Data+")");
			console.log(dataStr);
			var oTR=document.createElement("tr");
			var oTd1=document.createElement("td");
			var oTd2=document.createElement("td");
			var oTd3=document.createElement("td");
			var oTd4=document.createElement("td");
			var oTd5=document.createElement("td");
			
			oTd1.innerHTML=dataStr.name;
			oTd2.innerHTML=dataStr.email;
			oTd3.innerHTML=dataStr.phone;
			var oInput1=document.createElement("input");
			oInput1.type="button";
			oInput1.id="delete";
			oInput1.value="删除";
			oInput1.style.background="#8B4513";
			oInput1.style.width="100%";
			oInput1.style.height="100%";
			oInput1.onclick=function(){
		 	$(this).parent().parent().remove();
		 	$.ajax({
		 		type:"get",
		 		url:"../../product/DeleteProductById_get",
		 		data:{
		 			"id":dataStr.name
		 		},
		 		success:function(){
		 			alert(1);
		 		},
		 		error:function(){
		 			alert(0);
		 		},
		 		dataType:"json"
		 	})
		 	
	 };
			oTd4.appendChild(oInput1);
			var oInput2=document.createElement("input");
			oInput2.type="button";
			oInput2.id="add";
			oInput2.value="修改";
			oInput2.style.background="#8B4513";
			oInput2.style.width="100%";
			oInput2.style.height="100%";
			oInput2.onclick=function(){
		 	$('#tab').remove($(this).parent());
		 	
	 };
			oTd5.appendChild(oInput2);
			oTR.appendChild(oTd1);
			oTR.appendChild(oTd2);
			oTR.appendChild(oTd3);
			oTR.appendChild(oTd4);
			oTR.appendChild(oTd5);
			$("#tab").append(oTR);
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
	
	$.ajax({
		type:"get",
		url:"../../product/GetProductsByPage_get?pagesize=100&pageindex=1&type=1",
		data:{
			
		},	
		
		success:function(data){
			console.log(data);
			$.each(data, function(index,value) {
				
			var dataStr=eval("("+value.Data+")");
			console.log(dataStr);
			var oTR=document.createElement("tr");
			var oTd1=document.createElement("td");
			var oTd2=document.createElement("td");
			var oTd3=document.createElement("td");
			var oTd4=document.createElement("td");
			var oTd5=document.createElement("td");
			var oTd6=document.createElement("td");
			oTd1.innerHTML=dataStr.name;
			oTd2.innerHTML=dataStr.hao;
			oTd3.innerHTML=dataStr.shi;
			oTd4.innerHTML=dataStr.tutao;
			var oInput1=document.createElement("input");
			oInput1.type="button";
			oInput1.id="delete";
			oInput1.value="删除";
			oInput1.style.background="#8B4513";
			oInput1.style.width="100%";
			oInput1.style.height="100%";
			oInput1.onclick=function(){
		 	$(this).parent().parent().remove();
		 	$.ajax({
		 		type:"get",
		 		url:"../../product/DeleteProductById_get",
		 		data:{
		 			"id":dataStr.name
		 		},
		 		success:function(){
		 			alert(1);
		 		},
		 		error:function(){
		 			alert(0);
		 		},
		 		dataType:"json"
		 	})
		 	
	 };
			oTd5.appendChild(oInput1);
			var oInput2=document.createElement("input");
			oInput2.type="button";
			oInput2.id="add";
			oInput2.value="修改";
			oInput2.style.background="#8B4513";
			oInput2.style.width="100%";
			oInput2.style.height="100%";
			oInput2.onclick=function(){
		 	$('#tab2').remove($(this).parent());
		 	
	 };
			oTd6.appendChild(oInput2);
			oTR.appendChild(oTd1);
			oTR.appendChild(oTd2);
			oTR.appendChild(oTd3);
			oTR.appendChild(oTd4);
			oTR.appendChild(oTd5);
			oTR.appendChild(oTd6);
			$("#tab2").append(oTR);
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
	
	$("#btn4").click(function(){
		$("#tab").css("display","block");
		$("#tab2").css("display","none");
		$("#tianjia-box").css("display","none");
	});
	$("#btn5").click(function(){
		$("#tab").css("display","none");
		$("#tab2").css("display","block");
		$("#tianjia-box").css("display","none");
	});
	$("#btn6").click(function(){
		$("#tab").css("display","none");
		$("#tab2").css("display","none");
		$("#tianjia-box").css("display","block");
	})
	$("#tianjia").click(function(){
		var pName=$("#ming").val();
		var pShop=$("#hao").val();
		var pShi=$("#shi").val();
		var pTutao=$("#tutao").val();
		var pPic=$("#pic").val();
		var pLei=$("#lei").val();
	var DataObj={
		"name":pName,
		"hao":pShop,
		"shi":pShi,
		"tutao":pTutao,
		"pic":pPic
		
	}
	console.log(DataObj);
	var  dataJsonstr=JSON.stringify(DataObj);
	console.log(dataJsonstr);
		$.ajax({
			type:"post",
			url:"../../product/CreateUpdateProduct_post",
			data:{
				"id":pName,
				"datajson":dataJsonstr,
				"lei":pLei,
				"Type":1
			},
			success:function(data){
				if(data==1){
					alert("创建成功");
				}else{
					alert("创建失败");
				}
			},
			error:function(){
				alert("ajax error")
			},
			dataType:"json",
			
			async:true
		});
	});		
})