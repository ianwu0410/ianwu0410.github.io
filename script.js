// var navElement = document.getElementsByTagName("a")[0];
// var link = navElement.getAttribute("href");
var scrollto = document.getElementById("scrollToResearch");
var target = document.getElementById("research");
var loca = target.offsetTop;

scrollto.addEventListener('click',function(){
	
	window.scrollTo({
			top:loca,
			behavior:"smooth"
		});
	event.preventDefault();
	}
,true);