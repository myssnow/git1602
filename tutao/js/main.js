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
	})
	
})