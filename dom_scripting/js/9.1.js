var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
	paras[i].onclick = function(){
		alert("You clicked on a prargraph.");
	}
};
var para = document.getElementById("example");
// alert(typeof para.nodeName);	//nodeName属性是一个字符串
// alert(typeof para.style);		//style属性是一个对象

// alert(para.style.color);
//alert(para.style.fontSize);
para.style.color = "blue";
para.style.font = "5em 'Times',serif";

function getNextElement(node){
	if (node.nodeType == 1) {
		return node;
	};
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	};
	return null;
}

function styleHeaderSiblings(){
	if (!document.getElementsByTagName) {return false;};
	var headers = document.getElementsByTagName("h1");
	var elem;
	for (var i = 0; i < headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "2em";
		elem.style.color = "grey";
	};
}
addLoadEvent(styleHeaderSiblings);