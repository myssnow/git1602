$(function(){
	
	
	$('tbody').html('');
	var arrIndex= [];
	$.ajax({
		type:"post",
		url:"../../../product/GetProductsByPage_post",
		data:{
			"pagesize":"100",
			"pageindex":"1",
			"type":2
		},
		success:function(result){
//			alert(1)
//			console.log(result)
			var str = "";
			var mon = 0;
			$.each(result, function(index,data) {
				var dataObj = eval("("+data.Data+")");
				
				str+='<tr><td><img src="img/'+dataObj.img+'" class="proimg"/><span class="proname">'+dataObj.name+'</span></td>';
				str+='<td class="proprice">'+dataObj.price+'</td>';						
				str+='<td class="pronum">';							
				str+='<i class="ifirst" >+</i>';							
				str+='<input type="text" class="cartxt" value="'+dataObj.count+'" />';								
				str+='<i class="subgoods" >-</i></td>';								
				str+='<td>'+dataObj.zcount+'</td>';							
				str+='<td class = "delgoods">删除</td></tr>';
				
				arrIndex[index] = dataObj.price;
				mon+=dataObj.zcount;
			});
			$("tbody").prepend(str);
			
			$("#moneyred").html(parseFloat(mon).toFixed(2));
		},
		dataType:"json"
	});
	setTotal();
	function getMoney(num,count,element){
		var money = num*arrIndex[count];
		$(element).html(parseFloat(money).toFixed(2));
	}
	/**
	 * 商品增加
	 */
	$('tbody').on('click','.ifirst',function(event){
			var event = event || window.event;
			var target = event.target||event.srcElement;
			
			var num = $(this).parent().children().eq(1).val();
			$(this).parent().children().eq(1).val(++num);
			var count = $(this).parent().parent().index();
			getMoney(num,count,$(this).parent().parent().children().eq(3));
			
			setTotal();
	})
	
	/**
	 * 商品数量减少
	 */
	$('tbody').on('click','.subgoods',function(){
		var num = $(this).parent().children().eq(1).val();
		
		if(num-1 < 0){
			alert("对不起，您不能执行此操作了");
		}else{
			$(this).parent().children().eq(1).val(--num);
			var count = $(this).parent().parent().index();
			getMoney(num,count,$(this).parent().parent().children().eq(3));
			setTotal();
		}
	})
	/**
	 * 删除商品
	 */
//	var proId = $(this).siblings().eq(0).find('span').text();
//	console.log(proId)
	$('tbody').on('click','td',function(){
		var proId = $(this).siblings().eq(0).find('span').text();
			console.log(proId)
		console.log($(this).siblings().eq(0))
		var ele = $(this).parent();
		if($(this).text()=='删除'){
			$.ajax({
				type:"post",
				url:"../../product/DeleteProductById_post",
				data:{
					"id":proId
					
				},
				success:function(result){
					if(result == 1){
//						alert("删除成功");
						ele.remove();
//						$("#moneyred").html(0);
						setTotal();
					}else{
						alert("删除失败");
					}
				},
				error:function(){
					alert("ajax error");
				},
				dataType:"json"
			});
		}
		
		
	})
	
	/**
	 * 全选商品
	 */
	$('tbody').on('click','#all',function(){
		$("input[name=goods]").each(function(){
			$(this).attr("checked",true);
		})
	})
	/**
	 * 总价
	 */
	function setTotal(){
		$("#moneyred").html('');
		var num = 0;
		var mon = function(){
			$('tbody td:nth-child(4)').each(function(){
					num+=parseFloat($(this).text());
					$("#moneyred").html(num.toFixed(2));
			});
			return num;
		}
		return mon();
	}
	
	
$("#indexht").click(function(){
	window.location.href = "/httpview/shopping/index.html?username="+$("#carlog").text();
})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
