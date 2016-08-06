// Structure
//---------------------------
var slides = document.querySelectorAll('.slideshow .slideshow__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);


// Move to next slide
//---------------------------
function nextSlide() {
	slides[currentSlide].classList.remove('slideshow__slide--showing');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].classList.add('slideshow__slide--showing');
}