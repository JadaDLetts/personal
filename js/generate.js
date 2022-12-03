//defining a value to keep track of the number of slides in the slide show
import {nxtSlide} from "./photoHelper.js";

let numSlides;
//represents all elements that go by the class name slides
let slides;
//represents all elements that go by the class name dot
let dots;
//defining an array of all the slides in the slide show
let allSlides;
//boolean representation of whether upload photos has been pressed
let upldPressd = false;
//represents the form used to submit photos
const form1 = document.getElementById('form');
const form2 = document.querySelector('#form2');
//represents the slide currently being shown
let index = 0;
let delay = 0;

form1.addEventListener('reset', () => {
    reset();
});

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!upldPressd) {
        eventHelp();
      //  playSlides();

    } else {
        reset();
        eventHelp();
        //playSlides();
    }
});

function eventHelp() {
    //allSlides = document.querySelector('[type=file]').files;
    allSlides = document.getElementById("files").files;
    if (allSlides.length !== 0) {
        for (let i = 0; i < allSlides.length; i++) {
            numSlides += 1;
        }
        console.log("slide length: " + allSlides.length);
        upldPressd = true;
        generateSlides();
    } else{
        window.alert('Please Select 1 or More Photos')
    }
}

function reset() {
    upldPressd = false;
    document.getElementById("dot-list").innerHTML = "";
    document.getElementById("slideShow").innerHTML = "";
    allSlides = [];
    numSlides = 0;
    console.log(allSlides.length);
}

//function to generate a slide for all photos submitted
function basicSlideFormat(numSlide, src) {
   // document.getElementById("slideShow").style.display = "block";
    document.getElementById("slideShow").innerHTML +=
        `<div class="slides ">
		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
		<img src="` + src + `" alt="Photo ` + numSlide + `">
	</div>`;
    console.log(src);
}

//function to generate a dot for all the photos submitted
function basicDotFormat(numDot) {
   // document.getElementById("dot-list").style.display = "block";
    document.getElementById("dot-list").innerHTML +=
        `<span class="dot " onClick="currentSlide(` + numDot + `)"></span>`;
    console.log(document.getElementById("dot-list").innerHTML.toString());
}

function generateSlides() {
    // console.log(selectedFiles.length)
    for (let x = 0; x < allSlides.length; x++) {
        let y = x + 1;
        console.log("selected file: " + x);
        basicDotFormat(y);
        console.log(document.getElementById("dot-list").innerHTML.toString());
        let href = URL.createObjectURL(allSlides[x]);
        basicSlideFormat(y, href);
    }

    slides = document.getElementsByClassName("slides");
    dots = document.getElementsByClassName("dot");

    const btnNxtG = document.getElementById('btn-nxt-generate')
    const btnPrevG = document.getElementById('btn-prev-generate')

    btnNxtG.addEventListener('click', () => {
        console.log('nextSlide 1')
        nxtSlide(1, slides, dots)
    })

    btnPrevG.addEventListener('click', () => {
        console.log('nextSlide -1');
        nxtSlide(-1, slides, dots)
    })

    //sets display value to its default
    document.getElementById("slideDisplay").style.display = "initial";    //showSlide(1);
}

// //used to show all of the photos in the slide show on a timer
// function playSlides() {
//     popDisp();
//     //changing the image every input number of seconds
//     if(delay===0){
//     }else {
//         setTimeout(playSlides, delay * 1000);
//         //increasing the sIndex so that the slide show does not stay on one image
//         //setTimeout will not incremen
//         // t the sIndex
//         index++;
//     }
// }

// //function to help display the current slide
// function clrDisplay() {
//     //for loop to make sure only one photo can be displayed at one time
//     //will not have to worry about finding which picture is currently being displayed
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//
//     //for loop to make sure only one dot can be highlighted at one time
//     //will not have to worry about finding which dot is currently being highlighted
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
// }

// //function to help  display the current slide
// function popDisp() {
//     //displays the slide selected
//     slides[index].style.display = "block";
//     //displays the dot selected/ the dot associated with the slide currently displayed
//     dots[index].className += " active";
// }

// //function to check what slide the program is currently on
// function checkSIndex() {
//     //checking that the current sIndex is within range of the number of photos
//     if (index >= slides.length) {
//         index = 0
//     } else if (index < 0) {
//         index = slides.length - 1
//     }
// }
//
// //changes the current slide based on the dot pressed
// //param int is given by the dot pressed
// //calls show slide to ensure that the photo associated with the dot is shown
// function currentSlide(int) {
//     index = int;
//     showSlide(index);
// }
//
// //
// //used to show individual slides
// //parameter int represents the number of the slide to be shown
// function showSlide(int) {
//     //initiating sIndex equal to the given parameter
//     index = int;
//
//     //checking the index of the slide
//     checkSIndex();
//
//     //calling these two functions to display the proper slide
//     clrDisplay();
//     popDisp();
// }
//
// //ensures that when next/prev button is clicked the next slide is properly shown
// //param int is given by the buttons
// //calls show slide to show the next slide based on param int
// function nxtSlide(int) {
//     showSlide(index += int);
// }