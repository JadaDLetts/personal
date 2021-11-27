//using sIndex to represent the current slide being shown
let index = 0;
console.log("index: " + index);
//getting the array of slides
//retrieves all elements that go by the class name slides
let slides = document.getElementsByClassName("slides");
//getting the array of dots
//retrieves all elements that go by the class name dot
let dots = document.getElementsByClassName("dot");

//starts slideshow of photos
showSlides();

//used to show all of the photos in the slideshow on a timer
function showSlides() {
	showSlide(index);

	index++;

	//changing the image every 7 seconds
	setTimeout(showSlides, 7000);
	//increasing the index so that the slideshow does not stay on one image
	//setTimeout will not increment the sIndex

}