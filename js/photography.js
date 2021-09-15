//using sIndex to represent the current slide being shown
let sIndex = 0;
//starts slideshow of photos
showSlides();

//used to show all of the photos in the slideshow on a timer
function showSlides() {
    //getting the array of slides
    //retrieves all elements that go by the class name slides
    let slides = document.getElementsByClassName("slides");
    //getting the array of dots
    //retrieves all elements that go by the class name dot
    let dots = document.getElementsByClassName("dot");

    //for loop to make sure only one photo can be displayed at one time
    //will not have to worry about finding which picture is currently being displayed
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //for loop to make sure only one dot can be highlighted at one time
    //will not have to worry about finding which dot is currently being highlighted
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //checking that the current sIndex is within range of the number of photos
    if (sIndex >= slides.length) {
        sIndex = 0
    } else if (sIndex < 0) {
        sIndex = slides.length - 1
    }

    //displays the slide selected
    slides[sIndex].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[sIndex].className += " active";

    //changing the image every 7 seconds
    setTimeout(showSlides, 7000);
    //increasing the sIndex so that the slideshow does not stay on one image
    //setTimeout will not increment the sIndex
    sIndex++;
}

//changes the current slide based on the dot pressed
//param int is given by the dot pressed
//calls show slide to ensure that the photo associated with the dot is shown
function currentSlide(int) {
    sIndex = int;
    showSlide(sIndex);
}

//used to show individual slides
//parameter int represents the number of the slide to be shown
function showSlide(int) {

    //initiating sIndex equal to the given parameter
    sIndex = int;

    //getting the array of slides
    //retrieves all elements that go by the class name slides
    let slides = document.getElementsByClassName("slides");
    //getting the array of dots
    //retrieves all elements that go by the class name dot
    let dots = document.getElementsByClassName("dot");


    //checking that the current sIndex is within range of the number of photos
    if (sIndex >= slides.length) {
        sIndex = 0
    } else if (sIndex < 0) {
        sIndex = slides.length - 1
    }

    //for loop to make sure only one photo can be displayed at one time
    //will not have to worry about finding which picture is currently being displayed
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //for loop to make sure only one dot can be highlighted at one time
    //will not have to worry about finding which dot is currently being highlighted
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //displays the slide selected
    slides[sIndex].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[sIndex].className += " active";
}

//ensures that when next/prev button is clicked the next slide is properly shown
//param int is given by the buttons
//calls show slide to show the next slide based on param int
function nextSlide(int) {
    showSlide(sIndex += int);
}
