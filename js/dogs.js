$(document).ready( function() {
	$('.dog, .dog .badge').on('click', function() {
		$(this).toggleClass('collapsed');
	});
});