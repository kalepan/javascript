//字符串，数值，布尔值都是标量,它们在任意时刻就只能有一个值。
//如果想用一个变量来存储一组值，就需要使用数组

//数组可以用关键字Array声明，还可以指定数组初始元素个数，也就是数组的长度length

var beatles = Array(4);

//无法预知某个数组有多少个元素，可以在声明时不给出元素个数
var beatles = Array();

//向数组中添加元素的操作称为填充


beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

console.log(beatles[2]);

//填充数组的相对简单的方式

var beatles = Array("John","Paul","George","Ringo");

//我们甚至不用明确地表明我们是在创建数组。 事实上，只需用方括号把各个元素的初始值 括起来就可以了
var beatles = ["John","Paul","George","Ringo"];

var years = [1992,2015,2019];

var lennon = ["John", 1940, false];

//数组元素还可以是变量
var name = "John1";

beatles[0] = name;

//数组元素还可以是另一个数组
var names = ["John","Paul","George","Ringo"];

beatles[1] = names;

//数组元素还可以是另一个数组的元素

var names = ["John","Paul","George","Ringo"];

beatles[1] = names[2];

//关联数组

var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;