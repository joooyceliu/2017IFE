// JavaScript Document
"use strict";

var btn = document.getElementById("btn");
var main = document.getElementById("main");
var ok = document.getElementById("ok");
var cancel = document.getElementById("cancel");
var container = document.getElementById("container");

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