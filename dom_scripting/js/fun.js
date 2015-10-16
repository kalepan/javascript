function showPic(whichpic){
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false;
	if(placeholder.nodeName != "IMG") return false;
	var description = document.getElementById("description");
	if (!description) return false;
	var source = whichpic.getAttribute("href");
	placeholder.setAttribute("src",source);
	var title = whichpic.getAttribute("title");
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = title ? title : "无介绍";
	}
	return true;
}

function prepareGallery(){
	//检测当前浏览器是否理解getElementsByTagName
	if(!document.getElementsByTagName ) return false;

	//检测当前浏览器是否理解getElementById
	if(!document.getElementById) return false;
	var gallery = document.getElementById("imageGallery");
	//检测当前网页是否存在一个id为imageGallery的元素
	if(!gallery) return false;
	//遍历imageGallery元素中的所有链接
	//设置click事件，让它在有关链接被点击时完成以下操作
	//把这个链接作为参数传递给showPic函数
	//取消链接被点击时的默认行为，不让浏览器打开这个链接
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return !showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	};
}

function preparePlaceholder(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../images/placeholder.gif");
	placeholder.setAttribute("alt","my img gallery");
	placeholder.setAttribute("style","width:405px");

	var prepare = document.createElement("p");
	prepare.setAttribute("id","description");
	var txt = document.createTextNode("Choose an image");
	prepare.appendChild(txt);
	document.getElementsByTagName("body")[0].appendChild(placeholder);
	document.getElementsByTagName("body")[0].appendChild(prepare);
}


//在已有元素之前插入新元素
/*
	dom提供了名为insertBefore
	三件事
	1.新元素，2.目标元素，3.父元素（目标元素的父元素）
	语法：parentElement.insertBefore(newElement,targetElement);
*/

function preparePlaceholder2(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../images/placeholder.gif");
	placeholder.setAttribute("alt","my img gallery");
	placeholder.setAttribute("style","width:405px");

	var prepare = document.createElement("p");
	prepare.setAttribute("id","description");
	var txt = document.createTextNode("Choose an image");
	prepare.appendChild(txt);
	var gallery = document.getElementById("imageGallery");
	insertAfter(prepare,gallery);
	insertAfter(placeholder,gallery);
}

/*
	编写insertAfter方法
*/

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	};
}



//共享onload事件
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}