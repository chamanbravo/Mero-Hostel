var user = document.querySelector(".user");
var registerMenu = document.querySelector(".register-menu"); 
var body = document.querySelector("body");

registerMenu.style.display = "none";

user.addEventListener("click", (event) => {
	if(registerMenu.style.display == "none"){
		registerMenu.style.display = "block";
	}else{
		registerMenu.style.display = "none";
	}
});
