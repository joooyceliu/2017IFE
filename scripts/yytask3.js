// JavaScript Document
"use strict";

var inSchool = document.getElementById("in");
var outSchool = document.getElementById("out");
var inShow = document.getElementById("inShow");
var outShow = document.getElementById("outShow");
var school1 = document.getElementById("school1");
var school2 = document.getElementById("school2");

inSchool.onclick = function(){
	inShow.style.display = "block";
	outShow.style.display = "none";
};
outSchool.onclick = function(){
	outShow.style.display = "block";
	inShow.style.display = "none";
};

function change(value){
	if(value === "wuhan"){
		school1.style.display = "none";
		school2.style.display = "inline";
	}else {
		school2.style.display = "none";
		school1.style.display = "inline";
	}
}