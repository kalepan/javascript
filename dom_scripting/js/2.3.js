//算术操作符

var total = 1+5;
var total = 1+(4 * 5);

var temp_fahrenheit = 95;
var temp_celsius = (temp_fahrenheit - 32) / 1.8;

var year = 1940;

year = year + 1;

year++;

year--;

//拼接作用
var message = "I am feeling " + "happy";


var mood = "happy";

var message = "I am feeling "  + mood;


var year = 2005;

var message = "The year is " + year;

var another_message = year + " is The year";

alert(10 + "20");
alert(10 + 20);

//快捷操作符是+= 可以一次完成加法和赋值或拼接和赋值

var year = 2000;

var message = "The year is ";

message += year;
