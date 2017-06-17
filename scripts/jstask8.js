// JavaScript Document
"use strict";
	
var qian = document.getElementById("qian");
var hou = document.getElementById("hou");
var root = document.getElementById("root");
var chaxun = document.getElementById("chaxun");
var btn = document.getElementById("btn");
var nodeArr = [];

function qianxu(node){
	if(node){
		nodeArr.push(node);
		for(var i = 0; i < node.children.length; i++){
			qianxu(node.children[i]);
		}
	}
}
function houxu(node){
	if(node){
		for(var i = 0; i < node.children.length; i++){
			houxu(node.children[i]);
		}
		nodeArr.push(node);
	}
}

function change(){
	var i = 0;
	var timer = setInterval(function(){
		if(nodeArr[i - 1]){
			nodeArr[i - 1].style.backgroundColor = "white";
		}
		if(i === nodeArr.length){
			clearInterval(timer);
			return false;
		}
		nodeArr[i].style.backgroundColor = "blue";
		for(var j = 0; j < nodeArr[i].children.length; j++){
			nodeArr[i].children[j].style.backgroundColor = "white";
		}
		i++;
	}, 1000);
}

function findIt(){
	qianxu(root);
	var i = 0;
	var timer = setInterval(function(){
		if(nodeArr[i - 1]){
			nodeArr[i - 1].style.backgroundColor = "white";
		}
		if(i === nodeArr.length){
			clearInterval(timer);
			alert("未查询到");
			return false;
		}
		if(chaxun.value === nodeArr[i].innerText){
			nodeArr[i].style.backgroundColor = "red";
			setTimeout(function(){nodeArr[i].style.backgroundColor = "white";}, 5000);
			//一段时间后自动恢复成白色
			clearInterval(timer);
			return false;
		}
		nodeArr[i].style.backgroundColor = "blue";
		for(var j = 0; j < nodeArr[i].children.length; j++){
			nodeArr[i].children[j].style.backgroundColor = "white";
		}
		i++;
	}, 800);
}

qian.onclick = function(){
	nodeArr = [];
	qianxu(root);
	change();
};
hou.onclick = function(){
	nodeArr = [];
	houxu(root);
	change();
};
btn.onclick = function(){
	nodeArr = [];
	findIt();
};
