// JavaScript Document
"use strict";

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var input = document.getElementsByTagName("input");
var rotate = 0;

function goo(){
	var top = parseInt(red.style.top);
	var left = parseInt(red.style.left);
	if(rotate === 0){
		if(top <= 21){
		    alert("已在边缘，无法上移");
		    return false;
		}
		red.style.top = top - 21 + "px";
	}else if(rotate === 1){
		if(left >= 214){
			alert("已在边缘，无法右移");
		    return false;
		}
		red.style.left = left + 21 + "px";
	}else if(rotate === 2){
		if(top >= 210){
		    alert("已在边缘，无法下移");
		    return false;
		}
		red.style.top = top + 21 + "px";
	}else{
		if(left <= 25){
			alert("已在边缘，无法左移");
		    return false;
		}
		red.style.left = left - 21 + "px";
	}		
}

function left(r){
	if(r === 0){
		blue.style.width = "30%";
		blue.style.height = "100%";
		blue.style.top = 0;
		blue.style.left = 0;
	}else if(r === 1){
		blue.style.width = "100%";
		blue.style.height = "30%";
		blue.style.top = 0;
		blue.style.left = 0;
	}else if(r === 2){
		blue.style.width = "30%";
		blue.style.height = "100%";
		blue.style.top = 0;
		blue.style.left = "70%";
	}else if(r === 3){
		blue.style.width = "100%";
		blue.style.height = "30%";
		blue.style.top = "70%";
		blue.style.left = 0;
	}	
	rotate--;
}
function right(){
	if(rotate === 0){
		left(2);
	}else if(rotate === 1){
		left(3);
	}else if(rotate === 2){
		left(0);
	}else{
		left(1);
	}	
	rotate = rotate + 2;
}
function backk(){
	if(rotate === 0){
		left(3);
	}else if(rotate === 1){
		left(0);
	}else if(rotate === 2){
		left(1);
	}else{
		left(2);
	}	
	rotate = rotate + 3;
}

input[1].onclick = function(){
	if(rotate < 0){
		rotate = rotate + 4;
	}else if(rotate > 3){
		rotate = rotate - 4;
    }
	
	if(input[0].value === "GO"){
		goo();
	}else if(input[0].value === "TURN LEFT"){
		left(rotate);
	}else if(input[0].value === "TURN RIGHT"){
		right();
	}else if(input[0].value === "TURN BACK"){
		backk();
	}else{
		alert("输入指令错误");
		return false;
	}
	
};