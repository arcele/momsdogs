$(document).ready( function() {
	var wrapper = $('#wrapper');

	console.log("checking out ", window.outerWidth);
	if(window.outerWidth > 800) {
		//probably not a phone
		wrapper.css("width", "550px");
	} else {
		wrapper.addClass('mobile');
	}

	$('.dog, .dog .badge').on('click', function() {
		$(this).toggleClass('collapsed');
	});
});