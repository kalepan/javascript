//对象
var lennon = Object();
lennon.name = "john";
lennon.year = 1940;
lennon.living = false;

//创建对象还有一种更简洁的语法，即花括号语法

var lennon =  {name:"John",year:1940,living:false};

var beatles = Array();

beatles[0] = lennon;


var beatles = {};

beatles.vocalist = lennon;