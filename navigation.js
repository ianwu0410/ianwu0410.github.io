var navBtn = document.getElementById("openNav");
var display = document.getElementsByClassName("nav-smallscreen");
var close  = document.getElementById("closeNav");
//var outterClose = window.getComputedStyle(display[0],"::before");
//var bodyscroll = document.body.getElementsByTagName('overflow');

navBtn.addEventListener('click',function(){
	display[0].style.display = "block";
	document.body.style.overflow = "hidden";
	event.preventDefault();
},true)

close.addEventListener('click',function(){
	display[0].style.display = "none";
	document.body.style.cssText = "overflow:visible;";
},true)

// outterClose.addEventListener('click',function(){
// 	display[0].style.display = "none";
// 	document.body.style.cssText = "overflow:visible;";
// },true)