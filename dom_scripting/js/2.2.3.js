//会发生变化的，称为变量
var age = 32;
var mood = "happy";

//alert(age);

//提前声明变量是一种良好的编程习惯
var my_age;
var my_mood;

//不必单独声明每个变量，你也可以用一条语句一次声明多个变量；
var my_age,my_mood;
//也可以声明的同时进行赋值
var my_age = 22;
var my_mood = "sad";
//也可以用一条语句完成 
var my_mood = "sad",my_age=22;

//js语法中，变量和其他语法元素的名字都是区分大小写的。
var mood = "happy";
var mOOd = "sad";

console.log(mood,mOOd);

//js 不允许变量名包含空格或标点符号($除外)
var my mood = "happy";   //语法出错

//js 允许包含字母，数字，下划线，美元符号 但第一个字符不能是数字
//为了让比较长的变量名容易阅读，可以在变量名中适当加入下划线，就像下面这样：
var my_today_mood = "Happy";
//也可以采取驼峰命名法,将下划线去掉，后面的每个新单词改用大写字母开头
var myTodayMood = "Happy";
