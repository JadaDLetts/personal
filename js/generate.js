//represents the number of slides
let numSlides = 0;
let fileInput = document.getElementById('files');
let allSlides;
let dots;
let slides;
//represents the current slide/dot the slideshow is on
let index = 0;


fileInput.onchange = () => {
    const selectedFiles = [...fileInput.files];
    console.log(selectedFiles);
    allSlides = selectedFiles;
    console.log(allSlides);
    generateSlides();
}

//function to generate a slide for all photos submitted
function basicSlideFormat(numSlide, src) {
    document.getElementById("slideShow").innerHTML +=
        `<div class="slides ">
		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
		<img src="` + src + `" alt="Photo ` + numSlide + `">
	</div>`;
}

//function to generate a dot for all the photos submitted
function basicDotFormat(numDot) {
    document.getElementById("dot-list").innerHTML +=
        `<span class="dot" onClick="currentSlide(` + numDot + `)"></span>`;
    console.log(document.getElementById("dot-list").innerHTML.toString());
}

//function to help  display the current slide
function addToDisplay() {
    //displays the slide selected
    slides[index].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[index].className += " active";
}

function generateSlides() {


    console.log("here");
    console.log(allSlides.length);
    document.getElementById("slideShow").style.display = "";
    document.getElementById("dot-list").style.display = "";
    console.log("generate");

    // console.log(selectedFiles.length)
    for (let x = 0; x < allSlides.length; x++) {
        console.log("selected file: " + x);
        basicDotFormat(x);
        allSlides[x].src = 'images/'+x+'.jpg';
        basicSlideFormat(x, allSlides[x].src);
    }
}

function startSlideShow() {
    showSlides();
}

function saveSlideShow() {

}

//function to help display the current slide
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

//function to check what slide the program is currently on
function checkIndex() {
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

//used to show individual slides
//parameter int represents the number of the slide to be shown
function showSlide(int) {
    //initiating sIndex equal to the given parameter
    index = int;

    //checking the index of the slide
    checkIndex();

    //calling these two functions to display the proper slide
    emptyDisplay();
    addToDisplay();
}

//ensures that when next/prev button is clicked the next slide is properly shown
//param int is given by the buttons
//calls show slide to show the next slide based on param int
function nextSlide(int) {
    showSlide(index += int);
}