function displayAbbreviations(){

    //如果浏览器不支持就退出
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    //获取所有的abbr
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历abbr
    for(var i=0;i < abbreviations.length; i++){
        var current_abbr = abbreviations[i];
        //如果当前abbr的子节点为空则退出
        if(current_abbr.childNodes.length < 1) continue;
        //获取abbr的title属性
        var definition = current_abbr.getAttribute("title");
        //获取abbr的文本节点值
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    //创建dl元素
    var dlist = document.createElement("dl");
    for (key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) { return false;}
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}


function displayCitations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    //获取所有的blockquote
    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0; i < quotes.length; i++) {
        //如果没有cite属性,则退出
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        //获取所有子节点
        var quoteChildren = quotes[i].getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        //获取最后一个节点
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}


function displayAccesskeys(){
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    var links = document.getElementsByTagName('a');

    var akeys = new Array();

    for (var i = links.length - 1; i >= 0; i--) {
        var current_link = links[i];
        if (!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }

    var list =  document.createElement("ul");
    for(key in akeys){
        var text = akeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }

    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskyes");

    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(list);

}
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);