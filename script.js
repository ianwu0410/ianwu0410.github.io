// var navElement = document.getElementsByTagName("a")[0];
// var link = navElement.getAttribute("href");
var scrollto = document.getElementById("scrollToResearch");
var target = document.getElementById("research");
//var loca = target.offsetTop;

var tabBut1 = document.getElementById("firstTab");
var tabBut2 = document.getElementById("secondTab");
var tabBut3 = document.getElementById("thirdTab");

var imgDisplay1 =document.getElementById("user1");
var imgDisplay2 =document.getElementById("user2");
var imgDisplay3 =document.getElementById("pain");

tabBut2.addEventListener('click',function(){
	imgDisplay2.style.display = "block";
	imgDisplay1.style.display = "none";
	imgDisplay3.style.display = "none";

	tabBut2.style.cssText = "color: #2F5DED; border: 2px #2F5DED solid;";
	tabBut1.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	tabBut3.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	
	event.preventDefault();
})
tabBut3.addEventListener('click',function(){
	imgDisplay3.style.display = "block";
	imgDisplay1.style.display = "none";
	imgDisplay2.style.display = "none";

	tabBut3.style.cssText = "color: #2F5DED; border: 2px #2F5DED solid;";
	tabBut2.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	tabBut1.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	
	event.preventDefault();
})
tabBut1.addEventListener('click',function(){
	imgDisplay1.style.display = "block";
	imgDisplay2.style.display = "none";
	imgDisplay3.style.display = "none";

	tabBut1.style.cssText = "color: #2F5DED; border: 2px #2F5DED solid;";
	tabBut2.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	tabBut3.style.cssText = "color: #1c1c1c33; border: 2px #1c1c1c33 solid;";
	
	event.preventDefault();
})


scrollto.addEventListener('click',function(){
	
	window.scrollTo({
			top:loca,
			behavior:"smooth"
		});
	event.preventDefault();
	}
,true);