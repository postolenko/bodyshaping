$(document).ready(function() {
	$("body").css({"padding-top": $(".head-section").height() + "px"});

	var imgFirstClassWidth = $(".row").outerWidth(true)/2 - $("frt-cl-content").outerWidth(true);

	var imgFirstClassRightPosition = $(".row").outerWidth(true)/2 + $("frt-cl-content").outerWidth(true);


	$(".frt-cl-img-box").css({"height": $(".frt-cl-bg").height() + "px",
							  "width": imgFirstClassWidth + "px",
							  "left": imgFirstClassRightPosition + "px"
							});


	$(".frt-cl-img").fadeIn(3000);

	// if($(".frt-cl-img").offset.top() >  ) {
		
	// }

});