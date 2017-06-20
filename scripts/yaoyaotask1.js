// JavaScript Document
"use strict";

var name1 = document.getElementById("name1");
var submitbtn = document.getElementById("submit");
var p = document.getElementsByTagName("p")[0];

function test(){
	var Regcn = /[^\x00-\xff]{1,}/g; //汉字或全角
    var Regtrim = /^\s+|\s+$/g; //删除字符串两侧的空白字符
	var str = name1.value.replace(Regtrim,'');
	var len;
	if(Regcn.exec(str) === null){
		len = str.replace(Regcn,'').length;  //没有汉字的情况
	}else{
		len = str.replace(Regcn,'').length + Regcn.exec(str).toString().length * 2;//有汉字的情况
	}
	if(len === 0){
		name1.style.borderColor = "red";
		p.innerHTML = "姓名不能为空";
		p.style.color = "red";
	}else if(len < 4 || len > 16){
		name1.style.borderColor = "red";
		p.innerHTML = "长度要在4~16个字符范围内";
		p.style.color = "red";
	}else{
		name1.style.borderColor = "green";
		p.innerHTML = "名称格式正确";
		p.style.color = "green";
	}
}

submitbtn.onclick = function(){
	test();
};