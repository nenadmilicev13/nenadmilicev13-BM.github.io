const $ = jQuery.noConflict();

'use strict';
const navBtn = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var mainHeaderBtn = $('.js-main-header-btn');
		var mainNav = $('.js-main-nav');
		var mainNavLink = $('.js-main-nav-link');
		var dropMenu = $ ('.js-drop-menu');
        

		

		if ($(window).width() < 1025) {
			mainHeaderBtn.on('click', function() {
				mainNav.slideToggle();
			});
			
			mainNavLink.on('click', function(){
				dropMenu.slideToggle();
			});
		}
		
	}
};

export default navBtn;