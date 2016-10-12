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


function getNextElement(node){
	if (node.nodeType == 1) {
		return node;
	}

	if (node.nextSibling) {
		return getNextElement(node.nextSibling)
	}

	return null
}

function moveElement(elementId,final_x,final_y,interval){
    if (!document.getElementById) { return false;};
    if (!document.getElementById(elementId)) {return false;};
    var elem = document.getElementById(elementId);
    if (elem.movement) {
    	clearTimeout(elem.movement);
    }

    if (!elem.style.left) {
    	elem.style.left = '0px';
    }
    if (!elem.style.top) {
    	elem.style.top = '0px';
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    
    if (xpos == final_x && ypos == final_y) {
        return true;
    }

    if (xpos < final_x) {
    	dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }

    if (xpos > final_x) {
    	dist = Math.ceil((xpos - final_x)/10);
       xpos = xpos - dist;
    }

    if (ypos < final_y) {
    	dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
    	dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementId+ "',"+final_x+ "," +final_y+ "," +interval+ ")";
    elem.movement = setTimeout(repeat,interval);
}