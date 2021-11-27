// //represents the number of slides for the slideshow
// let numSlides = 0;
// let fileInput = document.getElementById('files');
// let allSlides = [];
//
// let pressed = false;
//
// const form = document.querySelector('form');
// let index = 0;
//
// //retrieves all elements that go by the class name slides
// let gSlides;
// //getting the array of dots
// //retrieves all elements that go by the class name dot
// let gDots;
//
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.getElementById("dot-list").innerHTML = "";
//     document.getElementById("slideShow").innerHTML = "";
//     allSlides = []
//     numSlides = 0;
//
//     allSlides = document.querySelector('[type=file]').files;
//     //allSlides = document.getElementById("files")
//     console.log("file length: " + allSlides.length);
//     for (let i = 0; i < allSlides.length; i++) {
//         numSlides += 1;
//     }
//
//     console.log("slide length: " + allSlides.length)
//     generateSlides();
// })
//
// form.addEventListener('reset', () => {
//     console.log("here")
//     document.getElementById("dot-list").innerHTML = "";
//     document.getElementById("slideShow").innerHTML = "";
//     allSlides = [];
//     numSlides = 0;
//     console.log(allSlides.length);
// })
//
// // fileInput.onchange = () => {
// //     const selectedFiles = [...fileInput.files];
// //     console.log(selectedFiles);
// //  allSlides = f;
// //     console.log(allSlides);
//
// // }
//
// //function to generate a slide for all photos submitted
// function basicSlideFormat(numSlide, src) {
//     document.getElementById("slideShow").style.display = "block";
//     document.getElementById("slideShow").innerHTML +=
//         `<div class="slides ">
// 		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
// 		<img src="` + src + `" alt="Photo ` + numSlide + `">
// 	</div>`;
//     console.log(src);
// }
//
// //function to generate a dot for all the photos submitted
// function basicDotFormat(numDot) {
//     document.getElementById("dot-list").style.display = "block";
//     document.getElementById("dot-list").innerHTML +=
//         `<span class="dot" onClick="currentSlide(` + numDot + `)"></span>`;
//     console.log(document.getElementById("dot-list").innerHTML.toString());
// }
//
// function generateSlides() {
//     console.log(allSlides.length);
//     console.log("generate");
//
//     // console.log(selectedFiles.length)
//     for (let x = 0; x < allSlides.length; x++) {
//         let y = x + 1;
//         console.log("selected file: " + x);
//         basicDotFormat(x);
//         let href = URL.createObjectURL(allSlides[x]);
//         basicSlideFormat(y, href);
//     }
//
//     gSlides = document.getElementsByClassName("slides");
//     gDots = document.getElementsByClassName("dot");
//
//     showSlide(1);
//     //starts slideshow of photos
//     //  playSlides();
// }
//
//
// //function to help display the current slide
// function clrDisp() {
//     //for loop to make sure only one photo can be displayed at one time
//     //will not have to worry about finding which picture is currently being displayed
//     for (let i = 0; i < gSlides.length; i++) {
//         gSlides[i].style.display = "none";
//     }
//
//     //for loop to make sure only one dot can be highlighted at one time
//     //will not have to worry about finding which dot is currently being highlighted
//     for (let i = 0; i < gDots.length; i++) {
//         gDots[i].className = gDots[i].className.replace(" active", "");
//     }
// }
//
// //function to help  display the current slide
// function popDisp() {
//     //displays the slide selected
//     gSlides[index].style.display = "block";
//     //displays the dot selected/ the dot associated with the slide currently displayed
//     gDots[index].className += " active";
// }
//
// //function to check what slide the program is currently on
// function checkIndex() {
//     //checking that the current sIndex is within range of the number of photos
//     if (index >= gSlides.length) {
//         index = 0
//     } else if (index < 0) {
//         index = gSlides.length - 1
//     }
// }
//
// //used to show all of the photos in the slideshow on a timer
// function playSlides() {
//     showSlide(index);
//
//     //changing the image every 7 seconds
//     setTimeout(showSlides, 7000);
//     //increasing the sIndex so that the slideshow does not stay on one image
//     //setTimeout will not increment the sIndex
//     index++;
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
//     checkIndex();
//
//     //calling these two functions to display the proper slide
//     clrDisp();
//     popDisp();
// }
//
//
// //ensures that when next/prev button is clicked the next slide is properly shown
// //param int is given by the buttons
// //calls show slide to show the next slide based on param int
// function nxtSlide(int) {
//     showSlide(index += int);
// }
//
//
// function saveSlideShow() {
//
// }
//