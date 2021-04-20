var header = document.querySelector(".header");
var hsb = document.querySelector(".hsb");
var herosb = document.querySelector(".herosb");
var sticky = header.offsetTop;
var stickysb = herosb.offsetTop;

window.onscroll = function() {scrollFun()};

function scrollFun() {
	if (window.pageYOffset > sticky){
		header.classList.add("sticky-header");
	}else{
		header.classList.remove("sticky-header");
	}

	if (window.pageYOffset >= stickysb){
		hsb.style.display = "unset";
	}else{
		hsb.style.display = "none";
	}
}
