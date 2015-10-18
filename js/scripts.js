$(document).ready(function() {

	$("body").css({"padding-top": $(".head-section").height() + "px"});


	var countScrollForNav = 0;

	var countClearScrollForNav = 0;

	var w = window,
	d = document,
	e = d.documentElement,
	// g = d.getElementsByTagName('body')[0],
	g = d.getElementsByTagName('body')[0],
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	var countPriceList = 0;
 	var pricesListArticles = [];



	getResponsiveNav();
	getHeightPriceList();

	$(".left-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});
	$(".right-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});

	$(window).resize(function() {

		$(".left-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});
		$(".right-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});

		getResponsiveNav();
		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		$("body").css({"padding-top": $(".head-section").height() + "px"});		

	});

	$(document).scroll(function() {
		
		getScrollToTopBtn();
		getResponsiveNav();

	});


	var positionLeftNav = "done";

	$(".glyphicon-align-justify").click(function() {

		if(positionLeftNav == false) {
			
			$(".left-nav").animate({"top": -100 + "%"}, 1000);
			positionLeftNav = "done";

		} else {

			$(".left-nav").animate({"top": 15 + "%"}, 1000);
			positionLeftNav = false;

		}

	});





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
	

	function getHeightPriceList() {

		if(bodyWidth > 768) {		

		 	for(countPriceList = 0; countPriceList <= $(".prices-list-box .prices-list").length - 1; countPriceList++ ) {

		 		pricesListArticles.push($(".prices-list-box:eq("+ countPriceList +")").height());

		 	}

		 	$(".prices-list-box .prices-list").css({"height": Math.max.apply(Math,pricesListArticles) + "px"});
		}

	}
 


		function getResponsiveNav() {

			if(bodyWidth < 768 || $(".head-section").offset().top > $(".head-section").height()) {

				$(".logo-parallelogram").css({"height": 80 + "px"});
				$(".logo-img").css({"margin-top": 5 + "px"});

			} else {

				$(".logo-parallelogram").css({"height": 130 + "px"});
				$(".logo-img").css({"margin-top": 35 + "px"});

			}

			if($(".head-section").offset().top > $(".head-section").height()) {
				
				++countScrollForNav;

				if( countScrollForNav == 1) {

					$("header").css({"background": "rgba(255, 255, 255, .8)"});

					countClearScrollForNav = 0;

				}

			} else {

				countScrollForNav = 0;
				++countClearScrollForNav;

				if(countClearScrollForNav == 1) {

					$("header").css({"background": "rgba(255, 255, 255, 1)"});

				}

			}

	}


$(".class-description-name-box:eq("+ ($(".class-description-name-box").length - 1) +")").css({"border-left":"1px solid transparent"});

// Navigation scroll

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {

					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});
	});


	function getScrollToTopBtn() {

		if ($(window).scrollTop() > $('.head-section').height() ) {

        	$('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }
	}

 
    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


});