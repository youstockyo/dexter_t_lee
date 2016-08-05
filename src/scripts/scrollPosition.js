// Structure
//---------------------------
var window = window;
var hasTransition = document.querySelectorAll('.has--transition');

// Events
//---------------------------
window.addEventListener('scroll', checkElements);
window.addEventListener('resize', checkElements);


// Event Handlers
//---------------------------
function checkElements() {
	[].forEach.call(hasTransition, checkIfInView);
}

function checkIfInView(i) {
	var element = i;
	var elementHeight = element.offsetHeight;
	var elementPosition = element.getBoundingClientRect();
	var elementTopPosition = elementPosition.top + window.pageYOffset;
	var elementBottomPosition = elementTopPosition + elementHeight;

	var windowHeight = window.innerHeight;
	var windowTop = document.body.scrollTop;
	var windowBottom = (windowHeight + windowTop);

	if ( (elementBottomPosition >= windowTop) && (elementTopPosition <= windowBottom) ) {
		element.classList.add('is--inview');
		console.log('in view');
	} else {
		element.classList.remove('is--inview');
		console.log('no longer in view');
	}
}