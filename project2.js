var navBtn = document.getElementById("openNav");
var display = document.getElementsByClassName("nav-smallscreen")[0];
var close  = document.getElementById("closeNav");

navBtn.addEventListener('click',function(){
	display.style.display = "block";
	event.preventDefault();
},true)

close.addEventListener('click',function(){
	display.style.display = "none";

},true)