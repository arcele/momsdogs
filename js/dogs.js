$(document).ready( function() {
	var wrapper = $('#wrapper');

	if(window.outerWidth <= 800) {
		wrapper.addClass('mobile');
	}

	wrapper.removeClass('loading');

	$('.dog, .dog .badge').on('click', function() {
		$(this).toggleClass('collapsed');
		console.log('doggy click.');
	});


	function Gallery() {
		// Very basic rotating image gallery.
		
		this.el = $("#gallery"),
		this.imageCount = 10,
		this.index = Math.ceil(Math.random() * this.imageCount),
		this.timeouts = {};

		this.setEvents = function() {
			this.el.on('click', function() {
				this.el.toggleClass('expanded');
				if(this.el.hasClass('expanded')) {
					// We're opening the gallery
					this.replaceGalleryImage();
				} else {
					// We're closing the gallery
					this.el.empty();
					clearTimeout(this.timeouts.fadeOutComplete);
					clearTimeout(this.timeouts.rotateImage);
				}
			}.bind(this));
		}

		this.replaceGalleryImage = function() {
			console.log('replacing.');
			this.el.find('img').addClass('fadeout')
			this.timeouts.fadeOutComplete = setTimeout( function() {
				this.el.empty();
				this.el.append($('<img class="gallery" src="img/gallery/'+ this.index++ +'.png" />'));
			}.bind(this), 500);
			if(this.index > this.imageCount) { this.index = 1 }
			this.timeouts.rotateImage = setTimeout( function() { this.replaceGalleryImage() }.bind(this), 4500);
		}


	}

	var gal = new Gallery();
	gal.setEvents();

});
