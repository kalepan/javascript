function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var title = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var description = document.getElementById("description");
	description.firstChild.nodeValue = title;
	
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}

//nodeType属性 共有12种可取值 
/*
	元素节点的nodeType 属性值 1
	属性节点的nodeType 属性值 2
	文本节点的nodeType 属性值 3

	nodeValue属性
	如果想改变一个文本节点的值，就要使用nodeValue属性， 用来得到和设置一个节点的值

	childNodes
	在一棵节点树上，childNodes属性可以用来获取任何一个元素的所有子元素
	firstChild   lastChild属性



*/


window.onload = countBodyChildren;