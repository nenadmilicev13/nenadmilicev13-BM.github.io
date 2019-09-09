const $ = jQuery.noConflict();

'use strict';
const Masonary = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		$('.gallery__image-box-container').masonry({
            // options
			itemSelector: '.gallery__item',
        });
	}
};

export default Masonary;