/**
getElementById
getElementsByTagName
getElementsByClassName
getAttribute
setAttribute
*/


//文档  DOM中的D  O  M   document  object  model


//获取元素

console.log(typeof document.getElementById("purchases"));

//getElementsByTagName
//即使文档中这个标签只有一个元素，getElementsByTagName也返回一个数组
//此时数组长度是1

console.log(document.getElementsByTagName("li").length);

for(var i=0;i < document.getElementsByTagName("li").length;i++){
	console.log(typeof document.getElementsByTagName("li")[i]);
}

console.log(document.getElementsByTagName("*").length);

var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");

console.log(items.length);

for (var i = items.length - 1; i >= 0; i--) {
	console.log(typeof items[i]);
};

//getElementsByClassName
alert(document.getElementsByClassName("sale important").length);

var shopping = document.getElementById("purchases");
var sales = shopping.getElementsByClassName("sale");
alert(sales.length);


function getElementsByClassName(node,classname){
	if(node.getElementsByClassName){
		return node.getElementsByClassName(classname);
	}else{
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i=0; i < elems.length; i++) {
			if(elems[i].className.indexOf(classname) != -1){
				results[results.length] = elems[i];
			}
		};
		return results;
	}
}