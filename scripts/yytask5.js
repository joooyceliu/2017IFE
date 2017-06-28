// JavaScript Document
"use strict";

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var input = document.getElementsByTagName("input");
var rotate = 0;



function goo(r){
	
	var top = parseInt(red.style.top);
    var left = parseInt(red.style.left);
	if(r === 0){
		if(top <= 21){
		    alert("已在边缘，无法上移");
		    return false;
		}
		red.style.top = top - 21 + "px";
	}else if(r === 1){
		if(left >= 214){
			alert("已在边缘，无法右移");
		    return false;
		}
		red.style.left = left + 21 + "px";
	}else if(r === 2){
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
function left(){
	rotate--;
	red.style.transform = "rotate(" + rotate * 90 + "deg)";
}
function right(){
	rotate++;
	red.style.transform = "rotate(" + rotate * 90 + "deg)";
}
function backk(){
	rotate += 2;
	red.style.transform = "rotate(" + rotate * 90 + "deg)";
}

function moveL(){
	red.style.transform = "rotate(-90deg)";
	rotate = 3;
	setTimeout("goo(3)", 1000);
}
function moveT(){
	red.style.transform = "rotate(0deg)";
	rotate = 0;
	setTimeout("goo(0)", 1000);
}
function moveR(){
	red.style.transform = "rotate(90deg)";
	rotate = 1;
	setTimeout("goo(1)", 1000);
}
function moveB(){
	red.style.transform = "rotate(180deg)";
	rotate = 2;
	setTimeout("goo(2)", 1000);
}

input[1].onclick = function(){
	if(rotate < 0){
		rotate = rotate + 4;
	}else if(rotate > 3){
		rotate = rotate - 4;
    }
	
	if(input[0].value === "GO"){
		goo(rotate);
	}else if(input[0].value === "TURN LEFT"){
		left();
	}else if(input[0].value === "TURN RIGHT"){
		right();
	}else if(input[0].value === "TURN BACK"){
		backk();
	}else if(input[0].value === "TRA LEF"){
		goo(3);
	}else if(input[0].value === "TRA TOP"){
		goo(0);
	}else if(input[0].value === "TRA RIG"){
		goo(1);
	}else if(input[0].value === "TRA BOT"){
		goo(2);
	}else if(input[0].value === "MOV LEF"){
		moveL();
	}else if(input[0].value === "MOV TOP"){
		moveT();
	}else if(input[0].value === "MOV RIG"){
		moveR();
	}else if(input[0].value === "MOV BOT"){
		moveB();
	}else{
		alert("输入指令错误");
		return false;
	}
};