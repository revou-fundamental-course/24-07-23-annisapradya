var slideIndex=1;
showslide(slideIndex);

function nextslide(n){
showslide(slideIndex=n);
}

function showslide(n){
var i;
var slides = document.getElementsByClassName("slide");

if (n>slides.length) {
	slideIndex=1;
}
if (n<1) {
	slideIndex=slides.length;
}

for (i=0; i<slides.length; i++){
	slides[i].style.display="none";
}
slides[slideIndex-1].style.display="block";
}