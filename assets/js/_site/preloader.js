const $ = jQuery.noConflict();

'use strict';
const Preloader = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		setTimeout(function() {
			$('.preloader').addClass('loaded')
		}, 400);
	}
};

export default Preloader;