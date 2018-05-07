$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth <= 767) {
		 	$('#nav-tab-first').on("click","a", function(){
		 		$("html,body").animate({scrollTop: $(".tab-content-first").offset().top}, 500);
		 	})
		 	$('#nav-tab-second').on("click","a", function(){
		 		$("html,body").animate({scrollTop: $(".tab-content-second").offset().top}, 500);
		 	})
		}
	});
});	
// --------------CHECKBOX---------------------
$(document).ready(function(){
	$('#checkbox-android').click(function(){
		$('#android').toggleClass("mob-order-box-selected");
		$('#android .mobile-order-box-img').toggleClass("mob-order-img-selected");
	});
	$('#checkbox-ios').click(function(){
		$('#ios').toggleClass("mob-order-box-selected");
		$('#ios .mobile-order-box-img').toggleClass("mob-order-img-selected");
	});

	$('#checkbox').click(function() {
        // $('#checkbox-textarea').toggleClass("checkbox-textarea-animate"); 
        // $('#checkbox-txt').toggleClass("checkbox-txt-animate");   
        $('.checkbox-wrapper-inner').toggleClass("checkbox-wrapper-inner-animate"); 
        $('#checkbox-textarea').slideToggle("slow"); 
        // $('#checkbox-textarea').slideToggle("slow"); 
        $('#checkbox-txt').slideToggle("slow");   
          
	});
});
// ------------------MOBILE HEADER---------------------
var mobplace = $('#mob-title-place');
var screenplace = $('#screen-title-place');
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth <= 767) {
	  		$('#mob-title').appendTo(mobplace);
	  		$('#mob-title').css({"font-size":"21px", "margin-bottom": "20px"});
		}
		else {
  			$('#mob-title').appendTo(screenplace);
  			$('#mob-title').css({"font-size":"30px", "margin-bottom": "0px"});
  		}
	}).trigger('resize');	
});	
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth > 767) {
  			$('#mob-title').appendTo(screenplace);
  			$('#mob-title').css({"font-size":"30px", "margin-bottom": "0px"});
  		}
	}).trigger('resize');	
});
// ------------HAMBURGER-MENU---------------------
$(document).ready(function(){
    $("#myNavbar").on('show.bs.collapse', function () {
        $(".navbar-toggle .icon-bar:first-child").addClass("top-animate", 1000);
        $(".navbar-toggle .icon-bar:nth-child(2)").addClass("mid-animate", 500);
        $(".navbar-toggle .icon-bar:last-child").addClass("bottom-animate", 1000);
        $(".header__logo").addClass("mob-logo-color");
        $(".header__title-mob").addClass("mob-title-color");
        // $(".increase-income").addClass("mob-blur");
        // $(".sites-create").addClass("mob-blur");
        // $(".mobile-order").addClass("mob-blur");
    });
     $("#myNavbar").on('hide.bs.collapse', function () {
        $(".navbar-toggle .icon-bar:first-child").removeClass("top-animate", 1000);
        $(".navbar-toggle .icon-bar:nth-child(2)").removeClass("mid-animate", 500);
        $(".navbar-toggle .icon-bar:last-child").removeClass("bottom-animate", 1000);
        $(".header__logo").removeClass("mob-logo-color");
        $(".header__title-mob").removeClass("mob-title-color");
        // $(".increase-income").removeClass("mob-blur");
        // $(".sites-create").removeClass("mob-blur");
        // $(".mobile-order").removeClass("mob-blur");
    });
});
// --------SLIDER-OVERLAY-------
$(document).ready(function(){
	$('#show-more-two').click(function(){
		$('.nav-pills li').removeClass("active");
		$('#landing-page').addClass("active");
		$("html,body").animate({scrollTop: $(".tab-content-first").offset().top}, 500);
	});
	$('#show-more-three, #show-more-four').click(function(){
		$('.nav-pills li').removeClass("active");
		$('#web-store').addClass("active");
		$("html,body").animate({scrollTop: $(".tab-content-first").offset().top}, 500);
	});
	$('#show-more-five').click(function(){
		$('.nav-pills li').removeClass("active");
		$('#company-site').addClass("active");
		$("html,body").animate({scrollTop: $(".tab-content-first").offset().top}, 500);
	});
});
// -------------SLIDER---------------
$(document).on('ready', function() {
	$('.site-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 2000,
  		infinite: true,
		dots: true,
		fade: true,
		speed: 500,
		infinite: true,
		cssEase: 'linear'
	});
});
// --------------SLIDER-SHOW-MORE---------------
$(document).ready(function(){
	$('.site-slider-layer').css("display", "block");
});
// ----------POPUP--------------
// $(document).ready(function(){
// 	$('#modal-main').on('show.bs.modal', function () {
// 		$(".content, .header").addClass('mob-blur');
// 	});
// 	$('#modal-main').on('hide.bs.modal', function () {
// 		$(".content, .header").removeClass('mob-blur');
// 	});
// });
// ---------RADIO-CHECKED----------------
$("input[type='radio']").click(function()
{
  var previousValue = $(this).attr('data-is-included');
  var name = $(this).attr('name');

  if (previousValue == 'true')
  {
    $(this).removeAttr('true');
    $(this).attr('data-is-included', false);
  }
  else
  {
    $("input[name="+name+"]:radio").attr('data-is-included', false);
    $(this).attr('data-is-included', 'true');
  }
});
// ---------OPTIONS-BUDGET----------------
$("#select").on('change', function(){
	if($(this).val() == 1){
	    $("#radio-wrapper-1").show();
	} else {
	    $("#radio-wrapper-1").hide();
	}
    if($(this).val() == 2){
	    $("#radio-wrapper-2").show();
	} else {
	    $("#radio-wrapper-2").hide();
	}
    if($(this).val() == 3){
	    $("#radio-wrapper-3").show();
	} else {
	    $("#radio-wrapper-3").hide();
	}
	if($(this).val() == 4){
	    $("#radio-wrapper-4").show();
	} else {
	    $("#radio-wrapper-4").hide();
	}
	if($(this).val() == 5){
	    $("#radio-wrapper-5").show();
	} else {
	    $("#radio-wrapper-5").hide();
	}
})
// -------------ANIMATE----------
//  wow = new WOW(
//   {
//     animateClass: 'animated',
//     offset:       100,
//     callback:     function(box) {
//       console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//     }
//   }
// );
// wow.init();

// -----------FIXED-HEADER--------------
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth > 768) {
		  	$(window).scroll(function(){
		  		if ($(this).scrollTop()>0) {
		  			$('.header').addClass('fixed');
		  			$('.header-sites').addClass('fixed-sites');
		  			// $('.header-sites').css("background", "rgba(5,21,38,0.9)!important");
		  			// $('.header__logo').addClass('fixed-logo');
		  			// $('.header .header__nav ul li a').addClass('fixed-nav');
		  		} else {
		  			$('.header').removeClass('fixed');
		  			$('.header-sites').removeClass('fixed-sites');
		  			// $('.header-sites').css("background", "inherit");
		  			// $('.header__logo').removeClass('fixed-logo');
		  			// $('.header .header__nav ul li a').removeClass('fixed-nav');
		  		}
			});
		}
	}).trigger('resize');	
});	

$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth <= 768) {
		  	$(window).scroll(function(){
		  		$('.header').removeClass('fixed');
		  		// $('.header__logo').removeClass('fixed-logo');
		  		$('.header .header__nav ul li a').removeClass('fixed-nav');
			});
		}
	}).trigger('resize');	
});	
// -------------HEADER-SITES--------------
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth < 768) {
		  	$(window).scroll(function(){
		  		if ($(this).scrollTop()>0) {
		  			$('.header-sites').css("background", "rgba(5,21,38,0.9)");
		  		} else {
		  			$('.header-sites').css("background", "inherit");
		  		}
			});
		}
	}).trigger('resize');	
});	
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth >= 768) {
		  	$(window).scroll(function(){
		  		if ($(this).scrollTop()>0) {
		  			$('.header-sites').css("background", "rgba(19, 234, 139, 0.9)");
		  		} else {
		  			$('.header-sites').css("background", "inherit");
		  		}
			});
		}
	}).trigger('resize');	
});	
// -------------BACK-TO-TOP---------------
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 768) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});

$(".mobile-increase-icon").mouseover(function() {
	$('.mobile-green-btn').css("opacity", "1");
});
$(".mobile-increase-icon").mouseleave(function() {
	$('.mobile-green-btn').css("opacity", "0");
});
// ---------MULTIPLE-POPUP-PORTFOLIO-CONTENT----------------------
var modaportlink = "link-modal-port"
function loadIframe(name) {
	var iframe = '<iframe src="' + name + '.html" width="100%" height="720" align="left"></iframe>'
	document.getElementById("iframe_modal").innerHTML = iframe
}
function loadLink1() {
	var text = '<a href="http://pronto-second.com/"><p>Перейти на сайт pronto-second.com</p></a>'
	document.getElementById(modaportlink).innerHTML = text
}
function loadLink2() {
	var text = '<a href="http://home-abc.com.ua/"><p>Перейти на сайт home-abc.com.ua</p></a>'
	document.getElementById(modaportlink).innerHTML = text
}
function loadLink3() {
	var text = '<a href="http://blossomshop.com.ua/"><p>Перейти на сайт blossom.com.ua</p></a>'
	document.getElementById(modaportlink).innerHTML = text
}
function loadLink4() {
	var text = '<a href="http://centralpark.kh.ua/"><p>Перейти на сайт centralpark.kh.ua</p></a>'
	document.getElementById(modaportlink).innerHTML = text
}