import {nxtSlide, showSlides, dotEventListener, slideLengthFunction} from "./photoHelper.js";
//using sIndex to represent the current slide being shown

//getting the array of slides
//retrieves all elements that go by the class name slides
const slides = document.getElementsByClassName("slides");

//getting the array of dots
//retrieves all elements that go by the class name dot
const dots = document.getElementsByClassName("dot");

dotEventListener(slides, dots);

const btnNxt = document.getElementById('btn-nxt')
const btnPrev = document.getElementById('btn-prev')

btnNxt.addEventListener('click', () => {
    console.log('nextSlide 1')
    nxtSlide(1, slides, dots)
})

btnPrev.addEventListener('click', () => {
    console.log('nextSlide -1');
    nxtSlide(-1, slides, dots)
})

//starts slideshow of photos
slideLengthFunction(slides.length)
showSlides(slides, dots);