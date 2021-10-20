let numSlides = 0;

function basicSlideFormat(numSlide){
	document.getElementById("slideShow").innerHTML +=
		`<div class='slides '>
		<p class="numbertext">` + numSlide + '/' + numSlides + `</p>
		<img src="../pics/10.jpg" alt='Photo ` + numSlide + `>
	</div>`;
}

function basicDotFormat(numDot){
	document.getElementById("dot-list").innerHTML +=
	`<span class='dot' onClick='currentSlide(` + numDot + `)'></span>`;
}