$(function(){
	var zName=$.query.get("name");
	var zHao=$.query.get("hao");
	var zShi=$.query.get("shi");
	var zTutao=$.query.get("tutao");
	var zPic=$.query.get("pic");
	$("#ming").val(zName);
	$("#hao").val(zHao);
	$("#shi").val(zShi);
	$("#tutao").val(zTutao);
	$("#pic").val(zPic);
	
	$("#tianjia").click(function(){
		var pName=$("#ming").val();
		var pShop=$("#hao").val();
		var pShi=$("#shi").val();
		var pTutao=$("#tutao").val();
		var pPic=$("#pic").val();
		var pLei=$("#lei").val();
		console.log(pLei);
		var DataObj={
			"name":pName,
			"hao":pShop,
			"shi":pShi,
			"tutao":pTutao,
			"lei":pLei,
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
				"Type":1
			},
			success:function(data){
				if(data==1){
					
				}else{
					
				}
			},
			error:function(){
				console.log("ajax error")
			},
			dataType:"json",
			
			async:true
		});
	});		
})
