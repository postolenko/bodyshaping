$(document).ready(function() {

	$("body").css({"padding-top": $(".head-section").height() + "px"});


	var countScrollForNav = 0;

	var countClearScrollForNav = 0;

	var i = 0;
	var j = 0;

	$(document).scroll(function() {
		
		getRespinsiveNav();

	});


	function getRespinsiveNav() {

		// console.log($(".head-section").offset().top);

		if($(".head-section").offset().top > $(".head-section").height()) {
			
			++countScrollForNav;

			if( countScrollForNav == 1) {

				$("header").css({"background": "rgba(255, 255, 255, .5)"});
				$(".logo-parallelogram").css({"height": 100 + "px"});
				$(".logo-img").css({"margin-top": 15 + "px"});
				// $(".right-nav").css({"padding": "14px 10px 14px 25px"});
				countClearScrollForNav = 0;

				// console.log(i++);
				// console.log($(".head-section").offset().top);

			}

		} else {


			countScrollForNav = 0;
			++countClearScrollForNav;

			if(countClearScrollForNav == 1) {

				$("header").css({"background": "rgba(255, 255, 255, 1)"});
				$(".logo-parallelogram").css({"height": 130 + "px"});
				$(".logo-img").css({"margin-top": 35 + "px"});
				// $(".right-nav").css({"padding": "24px 10px 24px 25px"});
			
				// console.log(j++);
				// console.log($(".head-section").offset().top);

			}

		}

	}


	// var imgFirstClassWidth = ($(window).width() - $(".row").outerWidth(true) ) / 2  ( $(".row").outerWidth(true) - $("frt-cl-content").outerWidth(true));

	// var imgFirstClassWidth = $(window).width() - $("frt-cl-content").width() - ($(window).width() - $(".row").outerWidth(true) ) / 2;

	// var imgFirstClassRightPosition = ($(window).width() - $(".row").outerWidth(true) ) / 2 + $("frt-cl-content").outerWidth(true);

	// var w = window,
	// d = document,
	// e = d.documentElement,
	// // g = d.getElementsByTagName('body')[0],
	// g = d.getElementsByClassName('frt-cl-bg')[0],
	// firstClBgHeight = w.innerHeight || e.clientHeight || g.clientHeight;	


	// $(".frt-cl-img-box").css({
	// 	"height": firstClBgHeight + "px",
	// 						  "width": imgFirstClassWidth + "px",
	// 						  "left": imgFirstClassRightPosition + "px"
	// 						});

	// // $(".frt-cl-img").css({"width": imgFirstClassWidth + "px"});
	// $(".frt-cl-img").css({"height": firstClBgHeight + "px"});

	// console.log($(".frt-cl-img").width() + $(".frt-cl-img").height());

	// $(".frt-cl-img").fadeIn(3000);


 	var countClassDescription = 0;
 	var classDescriptions = [];
 	// var br=this.getBoundingClientRect();
	// alert("Top:"+br.top+", Left:"+br.left+", Right:"+br.right+", Bottom:"+br.bottom);


	// // console.log($(".prices-list-box").length);
 	for(countClassDescription = 0; countClassDescription <= $(".class-box").length - 1; countClassDescription++ ) {

 		// classDescriptions.push($(".prices-list-box:eq("+ countClassDescription +")").height());
 		// $(".line-num:eq(" + countClassDescription + ")").css({"height": $(".class-box:eq(" + countClassDescription + ")").outerHeight() - $(".class-num:eq(" + countClassDescription + ")").height()  + "px"});

 		// $(".line-num:eq(" + countClassDescription + ")").css({"height": $(".class-num:eq(" + (countClassDescription + 1) + ")").offset().top - $(".class-num:eq(" + countClassDescription + ")").offset().top - $(".class-num:eq(" + countClassDescription + ")").height() + "px"});

 		// document.getElementsByClassName("class-box")[countClassDescription] = this.getBoundingClientRect();
 		// console.log(document.getElementsByClassName("class-box")[countClassDescription].top);
 		var secondCounter = countClassDescription + 1;
 		// var heightLine = document.getElementsByClassName("class-box")[secondCounter].offsetTop - document.getElementsByClassName("class-box")[countClassDescription].offsetTop - document.getElementsByClassName("class-box")[countClassDescription].offsetHeight;

 		 // var heightLine = document.getElementsByClassName("class-box")[secondCounter].offsetTop - document.getElementsByClassName("class-box")[countClassDescription].offsetTop - document.getElementsByClassName("class-box")[countClassDescription].offsetHeight;


 		// $(".line-num:eq(" + countClassDescription + ")").css({"height": heightLine + "px"});

 		// console.log($(".class-box").length + "  " +countClassDescription +"  "+document.getElementsByClassName("class-box")[countClassDescription].offsetTop);

 		if( countClassDescription == $(".class-box").length - 1 ) {

 			 $(".line-num:eq(" + countClassDescription + ")").css({"display": "none"});

 		}

 	}


 	// $(".prices-list-box .prices-list").css({"height": Math.max.apply(Math,pricesListArticles) + "px"});
 	// console.log(pricesListArticles);
 	// console.log(Math.max.apply(Math,pricesListArticles)+" "+pricesListArticles.indexOf(Math.max.apply(Math,pricesListArticles)));


	// $(".line-num").css({"height": $(".class-description-name-box").height()  + "px"});




 	var count = 0;
 	var pricesListArticles = [];

	// console.log($(".prices-list-box").length);
 	for(count = 0; count <= $(".prices-list-box .prices-list").length - 1; count++ ) {

 		pricesListArticles.push($(".prices-list-box:eq("+ count +")").height());

 	}

 	$(".prices-list-box .prices-list").css({"height": Math.max.apply(Math,pricesListArticles) + "px"});
 	// console.log(pricesListArticles);
 	// console.log(Math.max.apply(Math,pricesListArticles)+" "+pricesListArticles.indexOf(Math.max.apply(Math,pricesListArticles)));




 	$(window).resize(function() {
 		$("#left-triangle").css({"border-right-width": $(".row").width() / 2 + "px"});
		$("#right-triangle").css({"border-right-width": $(".row").width() / 2 + "px"});
 	});





	// var halfRow = $(".gift-box").width() / 2 + "px";

	// document.getElementById("left-triangle").style.borderWidth = "25px"+ halfRow + "0 0";

	// console.log(halfRow);

});