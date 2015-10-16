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
addLoadEvent(prepareGallery);