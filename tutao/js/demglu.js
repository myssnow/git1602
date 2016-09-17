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
		})
	})
	
})