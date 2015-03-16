$(document).ready( function() {
	var wrapper = $('#wrapper');

	if(window.outerWidth <= 800) {
		wrapper.addClass('mobile');
	}

	wrapper.removeClass('loading');

	$('.dog, .dog .badge').on('click', function() {
		$(this).toggleClass('collapsed');
	});
});