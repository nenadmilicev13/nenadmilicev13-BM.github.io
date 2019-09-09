
import Preloader from './_site/preloader';
import Sliders from './_site/sliders';
import Masonary from './_site/masonary';
import AnimateEl from './_site/animateEl';
import NavBtn from './_site/navBtn';



jQuery(function () {
	// Preloader
	Preloader.init();

	// Slick Slider
	Sliders.init();

	// Masonary
	Masonary.init();

	// AnimateEl
	AnimateEl.init();

	
	// AnimateEl
	NavBtn.init();

	console.log('hello');
});
