function getNewContent(){
	var request = getHTTPObject();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange = function(){
			//浏览器不同阶段更新readyStatus的值
			/*
				0:表示未初始化，1：正在加载 2：加载完毕 3：正在交互  4： 完成
			*/
			if (request.readyState == 4) {
				alert("Respone Received");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		}
		request.send(null);
	} else {
		alert("Sorry, your browser doesn't support XMLHttpRequest");
	}
	//alert("Function Done");
}
addLoadEvent(getNewContent);