function addLoadEvent(func){
	var oldlonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldlonload();
			func();
		}
	}
}

function insertAfter(newElement,targetELement){
	var parent = targetELement.parentNode;
	if (parent.lastChild == targetELement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetELement.nextSibling);
	}
}