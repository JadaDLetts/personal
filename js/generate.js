//defining a value to keep track of the number of slides in the slide show
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
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
//represents the slide currently being shown
let index = 0;
let delay = 0;
let num;

// form1.addEventListener('submit', (e) => {
//     e.preventDefault();
//     num = document.getElementById("t_delay");
//     delay = num.options.selectedIndex;
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!upldPressd) {
        eventHelp();

    } else {
        reset();
        eventHelp();
    }
});

function eventHelp() {
    num = document.getElementById("t_delay");
    //allSlides = document.querySelector('[type=file]').files;
    allSlides = document.getElementById("files").files;
    if (allSlides.length !== 0) {
        for (let i = 0; i < allSlides.length; i++) {
            numSlides += 1;
        }
        console.log("slide length: " + allSlides.length);
        generateSlides();
        upldPressd = true;
    }
    delay = document.querySelector("#t_delay");
    console.log("delay: " + delay.value);
}

form.addEventListener('reset', () => {
        reset();
});

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
    document.getElementById("slideShow").style.display = "block";
    document.getElementById("slideShow").innerHTML +=
        `<div class="slides ">
		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
		<img src="` + src + `" alt="Photo ` + numSlide + `">
	</div>`;
    console.log(src);
}

//function to generate a dot for all the photos submitted
function basicDotFormat(numDot) {
    document.getElementById("dot-list").style.display = "block";
    document.getElementById("dot-list").innerHTML +=
        `<span class="dot " onClick="currentSlide(` + numDot + `)"></span>`;
    console.log(document.getElementById("dot-list").innerHTML.toString());
}

function generateSlides() {
    // console.log(selectedFiles.length)
    for (let x = 0; x < allSlides.length; x++) {
        let y = x + 1;
        console.log("selected file: " + x);
        basicDotFormat(x);
        let href = URL.createObjectURL(allSlides[x]);
        basicSlideFormat(y, href);
    }

    slides = document.getElementsByClassName("slides");
    dots = document.getElementsByClassName("dot");

    document.getElementById("slideDisplay").style.display = "initial";    //showSlide(1);
}

//used to show all of the photos in the slide show on a timer
function playSlides() {
    showSlide(index);

    //changing the image every 7 seconds
    setTimeout(showSlides, delay * 1000);
    //increasing the sIndex so that the slide show does not stay on one image
    //setTimeout will not increment the sIndex
    index++;
}