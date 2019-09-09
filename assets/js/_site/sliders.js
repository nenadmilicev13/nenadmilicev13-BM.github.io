const $ = jQuery.noConflict();

'use strict';
const Sliders = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		var cards = $('.js-slider-cards');

		//cards slider 
		cards.slick({
			slidesToShow: 3.5,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			infinite: false,
			// autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}
};

export default Sliders;