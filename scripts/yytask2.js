// JavaScript Document
"use strict";

var input = document.getElementsByTagName("input");
var submitbtn = document.getElementById("submit");
var p = document.getElementsByTagName("p");

function testName(){
	var Regcn = /[^\x00-\xff]{1,}/g; //汉字或全角
    var Regtrim = /^\s+|\s+$/g; //删除字符串两侧的空白字符
	var str = input[0].value.replace(Regtrim,'');
	var len;
	if(Regcn.exec(str) === null){
		len = str.replace(Regcn,'').length;  //没有汉字的情况
	}else{
		len = str.replace(Regcn,'').length + Regcn.exec(str).toString().length * 2;//有汉字的情况
	}
	if(len === 0){
		input[0].style.borderColor = "red";
		p[0].innerHTML = "姓名不能为空";
		p[0].style.color = "red";
		return false;
	}else if(len < 4 || len > 16){
		input[0].style.borderColor = "red";
		p[0].innerHTML = "长度要在4~16个字符范围内";
		p[0].style.color = "red";
		return false;
	}else{
		input[0].style.borderColor = "green";
		p[0].innerHTML = "名称格式正确";
		p[0].style.color = "green";
		return true;
	}
}

function testPassword(){
	var len = input[1].value.length;
	if(input[1].value.replace(/[\d]/g,'')){
		input[1].style.borderColor = "red";
		p[1].innerHTML = "只能输入数字";
		p[1].style.color = "red";
		return false;
	}else if(len !== 6){
		input[1].style.borderColor = "red";
		p[1].innerHTML = "请输入6位数密码";
		p[1].style.color = "red";
		return false;
	}else{
		input[1].style.borderColor = "green";
		p[1].innerHTML = "密码可用";
		p[1].style.color = "green";
		return true;
	}
}

function testPassword2(){
	if(input[2].value !== input[1].value){
		input[2].style.borderColor = "red";
		p[2].innerHTML = "密码输入不一致";
		p[2].style.color = "red";
		return false;
	}else{
		input[2].style.borderColor = "green";
		p[2].innerHTML = "密码输入一致";
		p[2].style.color = "green";
		return true;
	}
}

function testEmail(){
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	if(reg.test(input[3].value)){
		input[3].style.borderColor = "green";
		p[3].innerHTML = "邮箱格式正确";
		p[3].style.color = "green";
		return true;
	}else{
		input[3].style.borderColor = "red";
		p[3].innerHTML = "邮箱格式错误";
		p[3].style.color = "red";
		return false;
	}
}

function testTel(){
	var len = input[4].value.length;
	if(input[4].value.replace(/[\d]/g,'')){
		input[4].style.borderColor = "red";
		p[4].innerHTML = "只能输入数字";
		p[4].style.color = "red";
		return false;
	}else if(len !== 11){
		input[4].style.borderColor = "red";
		p[4].innerHTML = "请输入11位手机号码";
		p[4].style.color = "red";
		return false;
	}else{
		input[4].style.borderColor = "green";
		p[4].innerHTML = "手机格式正确";
		p[4].style.color = "green";
		return true;
	}
}

input[0].onfocus = function(){
	p[0].innerHTML = "必填，长度为4~16个字符";
	p[0].style.color = "#b6b6b6";
};
input[1].onfocus = function(){
	p[1].innerHTML = "必填，请输入6位数字";
	p[1].style.color = "#b6b6b6";
};
input[2].onfocus = function(){
	p[2].innerHTML = "再次输入相同密码";
	p[2].style.color = "#b6b6b6";
};
input[3].onfocus = function(){
	p[3].innerHTML = "请输入邮箱";
	p[3].style.color = "#b6b6b6";
};
input[4].onfocus = function(){
	p[4].innerHTML = "请输入11位手机号";
	p[4].style.color = "#b6b6b6";
};

submitbtn.onclick = function(){
	if(testName() && testPassword() && testPassword2() && testEmail() && testTel()){
		alert("提交成功");
	}else{
		alert("输入有误");
	}
};