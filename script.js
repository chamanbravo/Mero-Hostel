var user = document.querySelector(".user");
var registerMenu = document.querySelector(".register-menu"); 
var body = document.querySelector("body");
var searchbar = document.querySelector(".hsb");
var heroSB = document.querySelector(".hero-searchbar");
var header = document.querySelector(".header");

var headerTop = header.offsetTop; 
var searchbarOffset = heroSB.offsetTop;

registerMenu.style.display = "none";

user.addEventListener("click", (event) => {
	if(registerMenu.style.display == "none"){
		registerMenu.style.display = "block";
	}else{
		registerMenu.style.display = "none";
	}
});

var mediaQuery = window.matchMedia('(min-width: 1024px)');

if(mediaQuery.matches){
	searchbar.style.display = "none";

	window.onscroll = function() {scrollFun()};

	function scrollFun(){
		if(window.pageYOffset > headerTop){
			header.style.boxShadow = "rgb(0 0 0 / 15%) 0 1.5px 20px 0px";
		}else{
			header.style.boxShadow = "unset";
		}

		if(window.pageYOffset > searchbarOffset){
			searchbar.style.display = "block";
			heroSB.style.display = "none"
		}else{
			searchbar.style.display = "none";
			heroSB.style.display = "inline-flex";
		}
	};
}


