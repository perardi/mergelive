/****************** Set upper city to center ******************/
function setMargins() {
    width = $(window).width();
    containerWidth = $("#sequence").width();  
    leftMargin = (width-containerWidth)/2;    
    $("#sequence").css("marginLeft", leftMargin);    
}

/****************** Set cookie, don't display video on mobile ******************/
$(function() {
			var COOKIE_NAME = 'mergelive2013_c2';
			$go = $.cookie(COOKIE_NAME);
			if ($go == null  && (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) ) {
				$.cookie(COOKIE_NAME, 'mergelive2013_c2', { path: '/', expires: 6 });
				$(".video_box").css("display", "inline");
				$(".video_box").css("height", $(window).height());
				$(".video_container").html('<iframe src="http://player.vimeo.com/video/69111323?autoplay=1" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
			}
			else {
			}
	});	

/****************** Variables for theme switching ******************/
function navNotActive() {
		$('.nav_blue, .nav_orange, .nav_purple, .nav_green, .nav_grey').removeClass('nav_active');
}

function showTwitterBar() {
		$("#twitter_sidebar").css("top", "381px");	
		$("#antenna").css("top", "535px");
		$("#main_banner").css("margin-top", "-175px");			
}


$(function() {



	setTimeout(function(){
	    $('#sponsored_flow').cycle({ 
	        speed: 1000,
	        timeout: 2000,
	    });
 
	    },200);	



});



$(document).ready(function() {

/****************** Load schedule ******************/	
	$.ajax({
	  url: "../mergelive2013/agenda/agenda.html",
	}).done(function( html ) {
	  $("#agenda_swap").append(html);
	});
	
	$.ajax({
	  url: "../mergelive2013/sponsors/sponsor_content.html",
	}).done(function( html ) {
	  $("#sponsored_by").append(html);
	});	

/****************** Open and close video ******************/	
	$(".watch_schedule").on('click', function() {
		$(".video_box").css("display", "inline");
		$(".video_box").css("height", $(window).height());
		$(".video_container").html('<iframe src="http://player.vimeo.com/video/69111323?autoplay=1" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');		
	});		
		
	$(".video_close, video_box").on('click', function() {
		$(".video_box").css("display", "none");
		$(".video_container").html('<p>&nbsp;</p>');		
	});	


/****************** Options for slider ******************/
    var options = {
        pagination: true,
        animateStartingFrameIn: true,
        preloader: true,
		swipeNavigation: false,
    };
   	var sequence2 = $("#sequence2").sequence(options).data("sequence");

/****************** Blit the plane ******************/
    var $swap = $('.swap');
    setInterval(function() {
        $swap.animate({
            opacity:"0"
        }, 50, function() {
            $swap.removeAttr("style");
        });
    }, 50);

	$(".nav_blue").on('click', function() {
		$("#navbar").css("background", "#006699");
		$(".blip").fadeIn('slow');				
		$(".sequence-theme").css("background-position", "0% bottom");
		$(".cityscape").css("background-position", "0% bottom");
		navNotActive();
		$(this).addClass('nav_active');		
		showTwitterBar();
	});
		
	$(".nav_orange").on('click', function() {
		$("#navbar").css("background", "#ff9900");
		$(".blip").fadeOut('slow');		
		$(".sequence-theme").css("background-position", "35% bottom");
		$(".cityscape").css("background-position", "25% 125%");
		navNotActive();
		$(this).addClass('nav_active');
		showTwitterBar();
	});
	
	$(".nav_purple").on('click', function() {
		$("#navbar").css("background", "#633393");
		$(".blip").fadeOut('slow');			
		$(".sequence-theme").css("background-position", "70% bottom");	
		$(".cityscape").css("background-position", "50% 155%");
		navNotActive();
		$(this).addClass('nav_active');
		$("#twitter_sidebar").css("top", "-3000px");
		$("#antenna").css("top", "-3000px");
		$("#main_banner").css("margin-top", "-3000px");
	});	
	
	$(".nav_green").on('click', function() {
		$("#navbar").css("background", "#008775");
		$(".blip").fadeOut('slow');			
		$(".sequence-theme").css("background-position", "100% bottom");	
		$(".cityscape").css("background-position", "75% 165%");
		navNotActive();	
		$(this).addClass('nav_active');	
		showTwitterBar();	
	});	
	
	$(".nav_grey").on('click', function() {
		$("#navbar").css("background", "#666666");
		$(".blip").fadeOut('slow');			
		$(".sequence-theme").css("background-position", "125% bottom");	
		$(".cityscape").css("background-position", "99% 170%");
		navNotActive();	
		$(this).addClass('nav_active');	
		showTwitterBar();
	});	

	$(".item1").on('click', function() {
		$(".content").css("left", "0%");
		$(".tabby").css("color", "#dddddd");		
		$(this).css("color", "#ffffff");
		$(".tabs").css("background-color", "#704699");
	});	
	
	$(".item2").on('click', function() {
		$(".content").css("left", "-100.5%");
		$(".tabby").css("color", "#dddddd");		
		$(this).css("color", "#ffffff");
		$(".tabs").css("background-color", "#008775");
	});	
	
	$(".item3").on('click', function() {
		$(".content").css("left", "-201.5%");
		$(".tabby").css("color", "#dddddd");
		$(this).css("color", "#ffffff");
		$(".tabs").css("background-color", "#997146");			
	});			
	
	$(".item4").on('click', function() {
		$(".content").css("left", "-301.5%");
		$(".tabby").css("color", "#dddddd");		
		$(this).css("color", "#ffffff");
		$(".tabs").css("background-color", "#466699");			
	});	
	
});		