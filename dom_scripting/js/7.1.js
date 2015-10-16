function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str +="</p>";
	document.write(str);
}

window.onload = function(){
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	// var info = "nodeName: ";
	// info += para.nodeName;
	// info += " nodeType: ";
	// info += para.nodeType;
	// alert(info);
	var txt = document.createTextNode("This is ");
	var em = document.createElement("em");
	var my_txt = document.createTextNode("my");
	em.appendChild(my_txt);
	alert(em.innerHTML);
	var txt_content = document.createTextNode(" content.");
	para.appendChild(txt);
	alert(para.innerHTML);
	para.appendChild(em);
	para.appendChild(txt_content);
	testdiv.appendChild(para);
}