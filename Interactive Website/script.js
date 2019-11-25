//Circle Intro Glow
	$(this).ready(function(){
		$(".circle-2").show().animate({opacity: '1'}, 3000);
		$(".circle-3").show().animate({opacity: '1'}, 3000);
		$(".circle-4").show().animate({opacity: '1'}, 3000);
		$(".circle-5").show().animate({opacity: '1'}, 3000);

	});


//Rotate Arm
var armRotate = 90;

function rotateArm(){
	$('.arm').css('transform', 'rotate('+armRotate+'deg)');
	armRotate = armRotate + 1;
}

//Volume Adjuster

function getMouse(event){
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	console.log(mouseX,mouseY);
}



$(document).ready(function(){
	var mouseDragging = false;
	var adjustmentTop = parseInt($('.adjustment').css('top'));
	console.log(adjustmentTop);
	var interval; // declared here to make it visible to clearInterval.

	var adjustTop = 0;
	$('.adjuster').mousedown(function(event){
		mouseDragging = true;
	});

	$(document).mouseup(function(event){
		mouseDragging = false;
	});

	$(document).mousemove(function(event){
		if (mouseDragging == true){
			var mouseY = event.clientY - adjustmentTop;
			if (mouseY > 0 && mouseY < 250){
				$('.adjuster').css('top', mouseY + 'px');
				var volume = 1 - mouseY/250;
				document.getElementById("song").volume = volume;
				console.log(volume);
			}
		};
	});

	$('.arm').mousedown(function(){
	    interval = setInterval(function() { rotateArm(); }, 50);
	}).mouseup(function() {
	    clearInterval(interval);
	}).mouseout(function() {
	    clearInterval(interval);
	});



	//Hide Pause Button
	$('#pause').hide();


	var playing = false;
	$(".play-music-top-container").click(function(){
		if (playing == false){
			document.getElementById("song").play();
			playing = true;
		} else {
			document.getElementById("song").pause();
			playing = false;
		}
	});


	$(".play-music-top-container").click(function(){
		$(".play-button").fadeOut(1, function(){
			$(".pause-button").show().animate({opacity: '1'}, 1);
				$(".loading-bar").animate({
					width: '450'
				}, 120000);
		});
		$(".play-music-top-container").click(function(){
			$(".pause-button").fadeOut(1, function(){
				$(".play-button").show().animate({opacity: '1'}, 1);

			});



	
		});


	});
});

