$(document).ready(function(){
	
	$(".dec-1").click(function(){
		$(".dec-1-container").show().animate({opacity: '1'}, 0);
		$(".dec-1-subtitle-1").show().animate({opacity: '1'}, 0);
		$(".dec-1-subtitle-2").show().animate({opacity: '1'}, 0);
		$(".house-container-big").show().animate({opacity: '1'}, 0);
		$(".triangle-left").show().animate({opacity: '1'}, 0);
		$(".triangle-right").show().animate({opacity: '1'}, 0);
		$(".rectangle").show().animate({opacity: '1'}, 0);
		$(".exit-container").show().animate({opacity: '1'}, 0);
		$(".exit-button").show().animate({opacity: '1'}, 0);
		$(".next-container").show().animate({opacity: '1'}, 0);
		$(".next-button").show().animate({opacity: '1'}, 0);	
	});

	$(".next-button").click(function(){
		$(".back-button").show().animate({opacity: '1'}, 0);
		$(".dec-1-subtitle-1").text("Dream decoded");
		$(".dec-1-subtitle-2").hide(function(){
		});
		$(".house-container-big").hide(function(){
		});
		$(".triangle-left").hide(function(){
		});
		$(".triangle-right").hide(function(){
		});
		$(".rectangle").hide(function(){
		});
		$(".dec-1-subtitle-3").show().animate({opacity: '1'}, 0);
		$(".back-container").show().animate({opacity: '1'}, 0);
		$(".back-button").show().animate({opacity: '1'}, 0);
	});

	$(".back-button").click(function(){
		$(".dec-1-subtitle-1").show().animate({opacity: '1'}, 0);
		$(".dec-1-subtitle-2").show().animate({opacity: '1'}, 0);
		$(".back-container").hide(function(){
		});
		$(".back-button").hide(function(){
		});
		$(".house-container-big").show().animate({opacity: '1'}, 0);
		$(".triangle-left").show().animate({opacity: '1'}, 0);
		$(".triangle-right").show().animate({opacity: '1'}, 0);
		$(".rectangle").show().animate({opacity: '1'}, 0);
		$(".dec-1-subtitle-1").text("On this night you dreamed of");
		$(".dec-1-subtitle-3").hide(function(){
		});
		
	});

	$(".exit-button").click(function(){
		$(".dec-1-container").hide(function(){
		});
		$(".dec-1-subtitle").hide(function(){
		});
		$(".house-container-big").hide(function(){
		});
		$(".exit-button").hide(function(){
		});
		$(".next-button").hide(function(){
		});
	});

});