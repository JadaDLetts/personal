//represents the number of slides for the slideshow
let numSlides = 0;

let fileInput = document.getElementById('files');
let allSlides = [];

let pressed = false;

const url = "generated.php";
const form = document.querySelector('form');


let files
let formData;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    files = document.querySelector('[type=file]').files;
    formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        allSlides[i] = file;
        
        formData.append('files[]', file);
    }
    
    console.log("slide length: " + allSlides.length)
    
    
    fetch(url, {
        method: 'POST',
        body: formData,
    }).then((response) => {
        console.log(response);
       // generateSlides();
    })
})

form.addEventListener('reset', () => {
    console.log("here")
    document.getElementById("dot-list").innerHTML = "";
    document.getElementById("slideShow").innerHTML = "";
    allSlides = [];
    files = "";
    formData = new FormData();
    console.log(allSlides.length);
})


// fileInput.onchange = () => {
//     const selectedFiles = [...fileInput.files];
//     console.log(selectedFiles);
   //  allSlides = f;
//     console.log(allSlides);

// }


//function to generate a slide for all photos submitted
function basicSlideFormat(numSlide, src) {
    document.getElementById("slideShow").style.display = "block";
    document.getElementById("slideShow").innerHTML +=
        `<div class="slides ">
		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
		<img src="` + src + `" alt="Photo ` + numSlide + `">
	</div>`;
}

//function to generate a dot for all the photos submitted
function basicDotFormat(numDot) {

    document.getElementById("dot-list").style.display = "block";
    document.getElementById("dot-list").innerHTML +=
        `<span class="dot" onClick="currentSlide(` + numDot + `)"></span>`;
    console.log(document.getElementById("dot-list").innerHTML.toString());
}

function generateSlides() {
    
    console.log("here");
    console.log(allSlides.length);
    console.log("generate");

    // console.log(selectedFiles.length)
    for (let x = 0; x < allSlides.length; x++) {
        console.log("selected file: " + x);
        basicDotFormat(x);
      //  allSlides[x].src = 'images/'+x+'.jpg';
        basicSlideFormat(x, allSlides[x].src);
    }
}

function saveSlideShow() {

}

