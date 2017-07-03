// JavaScript Document
"use strict";

var btn = document.getElementById("btn");
var main = document.getElementById("main");
var ok = document.getElementById("ok");
var cancel = document.getElementById("cancel");
var container = document.getElementById("container");

var isDrag = false;
//var windowW = window.innerWidth;   //浏览器窗口宽度
//var windowH = window.innerHeight;   //浏览器窗口高度
var e = e || window.event;

btn.onclick = function(){
	main.style.display = "block";
};
main.onclick = function(){
	main.style.display = "none";
	
};
container.onclick = function(){
	main.style.display = "block";
};


ok.onclick = function(){
	main.style.display = "none";
};
cancel.onclick = function(){
	main.style.display = "none";
};

document.onmousemove = moveFunc;
document.onmouseup = upFunc;
function downFunc(){
	isDrag = true;
}
function moveFunc(){
	if(isDrag){
		container.style.top = e.clientY;
		container.style.left = e.clientX;
	}
}
function upFunc(){
	isDrag = false;
}