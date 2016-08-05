// Structure
//---------------------------
var slides = document.querySelectorAll('.slideshow .slideshow__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);


// Move to next slide
//---------------------------
function nextSlide() {
	slides[currentSlide].className = 'slideshow__slide tour__slide';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].className = 'slideshow__slide tour__slide slideshow__slide--showing';
}