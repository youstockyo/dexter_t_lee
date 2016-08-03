// JQUERY VERSION
//---------------------------


// Structure
//---------------------------
var $window = $(window);
var $hasTransition = $('.has--transition');

// Events
//---------------------------
$window.on('scroll resize', checkElements);

// Event Handlers
//---------------------------
function checkElements() {
	$.each($hasTransition, checkIfInView);
}

function checkIfInView() {
	var $element = $(this);
	var $elementHeight = $element.outerHeight();
	var $elementTopPosition = $element.offset().top;
	var $elementBottomPosition = ($elementTopPosition + $elementHeight);

	var $windowHeight = $window.height();
	var $windowTop = $window.scrollTop();
	var $windowBottom = ($windowHeight + $windowTop);


	// console.log('transition this');
	// console.log('$element', this);
	// console.log('$elementHeight', $elementHeight);
	// console.log('$elementTopPosition', $elementTopPosition);
	// console.log('$elementBottomPosition', $elementBottomPosition);

	if (($elementBottomPosition >= $windowTop) && ($elementTopPosition <= $windowBottom)) {
		$element.addClass('is--inview');
		console.log('its in view');
	} else {
		$element.removeClass('is--inview');
		console.log('no longer in view');
	}

}