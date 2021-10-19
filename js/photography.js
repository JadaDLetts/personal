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
console.log("starting slideshow");

showSlides();

function emptyDisplay() {
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
}

function addToDisplay() {
    //displays the slide selected
    slides[index].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[index].className += " active";
}

function checkSIndex() {
    //checking that the current sIndex is within range of the number of photos
    if (index >= slides.length) {
        index = 0
    } else if (index < 0) {
        index = slides.length - 1
    }
}

//used to show all of the photos in the slideshow on a timer
function showSlides() {
    showSlide(index);

    //changing the image every 7 seconds
    setTimeout(showSlides, 7000);
    //increasing the sIndex so that the slideshow does not stay on one image
    //setTimeout will not increment the sIndex
    index++;
}

//changes the current slide based on the dot pressed
//param int is given by the dot pressed
//calls show slide to ensure that the photo associated with the dot is shown
function currentSlide(int) {
    index = int;
    showSlide(index);
}

//
//used to show individual slides
//parameter int represents the number of the slide to be shown
function showSlide(int) {
    //initiating sIndex equal to the given parameter
    index = int;

    checkSIndex();

    emptyDisplay();

    addToDisplay();
}

//ensures that when next/prev button is clicked the next slide is properly shown
//param int is given by the buttons
//calls show slide to show the next slide based on param int
function nextSlide(int) {
    showSlide(index += int);
}