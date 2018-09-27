$('document').ready(function () {
	var audio = $('.audio-track')[0];
//	$('audio').prop('muted', true);
	$('.music-play').click(function () {
		if ($('.music-play').hasClass('music-pause')) {
			$('.music-play').toggleClass('music-pause');
			audio.pause();
		} else if (!$('.music-play').hasClass('music-pause')) {
			audio.play();
			$('.music-play').toggleClass('music-pause');
		}
	});
	$('.unmute').click(function () {
		if ($("audio").prop('muted')) {
				$("audio").prop('muted', false);
			$('.unmute').toggleClass('mute');
		} else {
			$("audio").prop('muted', true);
			$('.unmute').toggleClass('mute');
		}
	});
});
