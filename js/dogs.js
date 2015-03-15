$(document).ready( function() {
	var wrapper = $('#wrapper');

	console.log("checking out ", window.outerWidth);
	if(window.outerWidth <= 800) {
		wrapper.addClass('mobile');
	}

	$('.dog, .dog .badge').on('click', function() {
		$(this).toggleClass('collapsed');
	});
});