function shout(){
	var beatles = Array("John","Paul","George","Ringo");
	for(var count = 0; count < beatles.length; count++){
		console.log(beatles[count]);
	}
}

shout();

function multiply(num1,num2){
	var total = num1 * num2;
	console.log(total);
}

multiply(19,19);

function multiply_return(num1,num2){
	var total = num1 * num2;
	return total;
}

console.log(multiply_return(11,22));

function convertToCelsius(temp){
	var result = temp -32;
	result = result / 1.8;
	return result;
}

console.log(convertToCelsius(97));

//变量的作用域


function square(num){
	var total = num * num;
	return total;
}

var total = 50;
var number = square(20);
console.log(number);
console.log(total);