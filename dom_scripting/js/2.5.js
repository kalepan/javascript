

//while循环


var count = 1;

while( count < 11){
	console.log(count);
	count++;
}


do {
	console.log(count);
	count++;
} while(count < 11)

/*
for( initial condition; test condition; alter condition){
	statements;
}
*/

for(var count=100; count < 111; count++){
	console.log(count);
}

//遍历数组
var beatles = Array("John","Paul","George","Ringo");
for(var count=0; count < beatles.length; count++){
	console.log(beatles[count]);
}