let index = 0;
let slideLength;
export const slideLengthFunction = (length) => {
    slideLength = length
}

//used to show individual slides
//parameter int represents the number of the slide to be shown
const showSlide = (slides, dots, int) =>{
    //initiating sIndex equal to the given parameter
    index = int;

    //checking the index of the slide
    checkSIndex();

    //calling these two functions to display the proper slide
    clrDisplay(slides, dots);
    popDisp(slides, dots);
}

//used to show all of the photos in the slideshow on a timer
export const showSlides = (slides, dots) => {
    if(slides === undefined){
        console.log('wth')
    }
    // console.log(slides[0])
    showSlide(slides, dots, index);

    // //increasing the index so that the slideshow does not stay on one image
    // index++;
    //
    //
    // //changing the image every 7 seconds
    // //setTimeout will not increment the sIndex
    //
    // setTimeout(() => showSlides(slides, dots), 7000)

}

//function to help display the current slide
const clrDisplay = (slides, dots) => {
    //for loop to make sure only one photo can be displayed at one time
    //will not have to worry about finding which picture is currently being displayed
    for (let i = 0; i < slideLength; i++) {
        slides[i].style.display = "none";
    }

    //for loop to make sure only one dot can be highlighted at one time
    //will not have to worry about finding which dot is currently being highlighted
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

//function to help  display the current slide
const popDisp = (slides, dots) =>{
    //displays the slide selected
    slides[index].style.display = "block";
    //displays the dot selected/ the dot associated with the slide currently displayed
    dots[index].className += " active";
}

//function to check what slide the program is currently on
const checkSIndex = () =>{
    //checking that the current sIndex is within range of the number of photos
    if (index >= slideLength) {
        index = 0
    } else if (index < 0) {
        index = slideLength - 1
    }
}

//changes the current slide based on the dot pressed
//param int is given by the dot pressed
//calls show slide to ensure that the photo associated with the dot is shown
export const dotEventListener = (slides, dots) => {
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            showSlide(slides, dots, i)
        })
    }
}

//ensures that when next/prev button is clicked the next slide is properly shown
//param int is given by the buttons
//calls show slide to show the next slide based on param int
export const nxtSlide = (int, slides, dots) => {
        let temp = index += int;
        showSlide(slides, dots, temp);
}