$(function(){
	
	$("#sub1").click(function(){
//		alert(1)
			var pName=$("#usernamesignup").val();
			var pEmail=$("#emailsignup").val();
			var pPsw=$("#passwordsignup").val();
			var pPhone=$("#phone").val();
			
		var DataObj={
			"name":pName,
			"email":pEmail,
			"password":pPsw,
			"phone":pPhone,
			
		}
		console.log(DataObj);
		var dataJsonstr=JSON.stringify(DataObj);
		console.log(dataJsonstr);
		$.ajax({
			
			url:"../../product/CreateUpdateProduct_post",
			data:{
				"id":pName,
				"datajson":dataJsonstr,
				"Type":0
			},
			success:function(data){
				alert(data);
				if(data==1){
					alert("创建成功");
				}else{
					alert("创建失败");
				}
			},
			error:function(){
				alert("ajax error");
			},
			dataType:"json",
			type:"post"
			
		});
		return false;
	});
	$("#btn3").click(function(){
		var userName=$("#username").val();
		var userPsw=$("#password").val();
		$.ajax({
			type:"post",
			url:"../../product/GetProductById_post",
			data:{
				"id":userName
			},
			success:function(data){
				var datajson=data.Data;
				var dataAr=eval("("+datajson+")");
				
				if(dataAr.password==userPsw){
					window.location="index.html";
				}else{
					alert("密码错误");
				}
			},
			dataType:"json"
		});
	});
	
		$("#usernamesignup").blur(function(){
			
			if($("#usernamesignup").val()==""){
				$("#p1").css("display","block");
			}else{
				$("#p1").css("display","none");
			}
	});
	
		$("#emailsignup").blur(function(){
			
			if($("#emailsignup").val()==""){
				$("#p2").css("display","block");
			}else{
				$("#p2").css("display","none");
			}
	});
	
		$("#passwordsignup").blur(function(){
			
			if($("#passwordsignup").val()==""){
				$("#p3").css("display","block");
			}else{
				$("#p3").css("display","none");
			}
	});
	
		$("#passwordsignup_confirm").blur(function(){
			
			if($("#passwordsignup_confirm").val()==""){
				$("#p4").css("display","block");
			}else{
				$("#p4").css("display","none");
			}
	});
	
		$("#phone").blur(function(){
			
			if($("#phone").val()==""){
				$("#p5").css("display","block");
			}else{
				$("#p5").css("display","none");
			}
	});
	
	
	
})