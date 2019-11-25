var audio;

//Hide Pause Button
$('#pause').hide();

//Initialize Audio
initAudio($('#playlist li:first-child'));

//Initializer Function
function initAudio (element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');

	//Create Audio Object
	audio = new Audio ('audio/' + song);

	if(!audio.currenTime) {
		$('#duration').html('0.00');
	}

	$('#audio-player.title').text(title);
	$('#audio-player.artist').text(artist);

	//Insert Cover
	$('img.cover').attr('src', 'img/covers/' + cover);

	$('#playlist li').removeClass('active');
	element.addClass('active');


}
