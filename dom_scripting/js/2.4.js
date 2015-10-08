
//if语句
if(1 > 2){
	alert("The world has gone mad!");
}else{
	alert("All is well with the world");
}

//比较操作符  大于 >  小于 <  大于等于>= 小于等于 <=  相等 ==  不等于 !=

var my_mood = "happy";
var your_mood = "sad";
if(my_mood == your_mood){
	alert("We both feel the same.");
}

//相等== 并不表示严格相等，这一点很容易让人犯糊涂

var a = false;
var b = "";
if(a == b){
	alert("a equals b");
}

//使用严格比较  ===    !==

if(a === b){
	alert("a equals b");
}else{
	alert("a is not equals b");
}


var num = 8;

//逻辑操作符
if(num >=5 && num <=10){	//逻辑与
	alert("The number is in the right range.");
}

if(num <5 || num >10){		//逻辑或
	alert("The number is not in the right range.");
}

if(!(num > 5)){		//逻辑非
	alert("The number is not in the right range.");
}




