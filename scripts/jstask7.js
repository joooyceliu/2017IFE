// JavaScript Document
"use strict";
	
var qian = document.getElementById("qian");
var zhong = document.getElementById("zhong");
var hou = document.getElementById("hou");
var root = document.getElementById("root");
var nodeArr = [];


function qianxu(node){
	if(node){
		nodeArr.push(node);
		qianxu(node.firstElementChild);
		qianxu(node.lastElementChild);
	}
}
function zhongxu(node){
	if(node){
		zhongxu(node.firstElementChild);
		nodeArr.push(node);
		zhongxu(node.lastElementChild);
	}
}
function houxu(node){
	if(node){
		houxu(node.firstElementChild);
		houxu(node.lastElementChild);
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



qian.onclick = function(){
	nodeArr = [];
	qianxu(root);
	change();
};
zhong.onclick = function(){
	nodeArr = [];
	zhongxu(root);
	change();
};
hou.onclick = function(){
	nodeArr = [];
	houxu(root);
	change();
};

