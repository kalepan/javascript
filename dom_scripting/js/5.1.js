function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}

window.onload = prepareLinks;
function prepareLinks(){
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		if (links[i].getAttribute("class") == "popup") {
			links[i].onclick = function (){
				popUp(this.getAttribute("href"));
				return false;
			}
		};
	};
}
