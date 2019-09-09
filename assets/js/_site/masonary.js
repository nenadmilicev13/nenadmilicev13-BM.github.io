const $ = jQuery.noConflict();

'use strict';
const Masonary = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		$(window).on('load', function() {
			$('.gallery__image-box-container').masonry({
				// options
				itemSelector: '.gallery__item',
			});
		});
		
	}
};

export default Masonary;