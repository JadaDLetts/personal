//function to help display the current slide
function clrDisplay() {
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

//function to help  display the current slide
function popDisp() {
    //displays the slide selected
    slides[index].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[index].className += " active";
}

//function to check what slide the program is currently on
function checkSIndex() {
    //checking that the current sIndex is within range of the number of photos
    if (index >= slides.length) {
        index = 0
    } else if (index < 0) {
        index = slides.length - 1
    }
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

    //checking the index of the slide
    checkSIndex();

    //calling these two functions to display the proper slide
    clrDisplay();
    popDisp();
}

//ensures that when next/prev button is clicked the next slide is properly shown
//param int is given by the buttons
//calls show slide to show the next slide based on param int
function nxtSlide(int) {
    showSlide(index += int);
}