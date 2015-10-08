
//getAttribute

var paras = document.getElementsByTagName("p");
for(var i =0; i < paras.length; i++){
	//修改一下，当title属性有值时才打印消息
	var title_text = paras[i].getAttribute("title");
	if(title_text){
		console.log(paras[i].getAttribute("title"));
	}
	
}


//setAttribute
//得到id是purchases的元素，把这个元素的title属性值设置为a list of goods

var elem = document.getElementById("purchases");
alert(elem.getAttribute("title"));
elem.setAttribute("title","a list of goods");
alert(elem.getAttribute("title"));


//当属性不存在时，setAttribute会先创建属性，然后赋值， 如果属性值已经存在，那么就会覆盖
// p元素已经有了一个title属性，可以用setAttribute来改变它的值
var paras = document.getElementsByTagName("p");

for(var i=0;i<paras.length;i++){
	var title_text = paras[i].getAttribute("title");
	if (title_text) {
		paras[i].setAttribute("title","brand new title text");
		console.log(paras[i].getAttribute("title"));
	}
}