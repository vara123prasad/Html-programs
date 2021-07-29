//roots of quadratic equation


var a=1;
var b=4;
var c=4;

let des=Math.sqrt((b*b)-4*a*c);
let denom=(2*a);

   var root1 = (-b + Math.sqrt(des)) / denom;
   var root2 = (-b - Math.sqrt(des)) / denom;


console.log(root1 );
console.log(root2);
//pic a random number;
var a=(Math.random());
console.log(a);
console.log('-----------------------------------------------');
//random number in between the range
//	var a1=[2,4,6,8,9,2,5,6,8,3,3636,7,36,845,235,3]
var min=1;
var max=50;

var a1 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(a1);
//print kilometers to miles 0.621371
var kilo=5;
var mile=0.621371;
var result=(kilo*mile)
console.log(result);
//print celcius to forenheit (1°C × 9/5) + 32 = 33.8°F

var cel=999;
var mult=cel*9/5+32;
var resulkt=mult;
console.log(resulkt);
console.log('-----------------------------------------------');
//factorial
var fac=0;
let res=1;
for(i=1;i<=fac;i++){
	res*=i;
}
console.log(res);
if(fac==0){
	console.log("not a factorial");
}
//fibijnossi
var numbers=5;
var a=0,b=1,c;
for(var i=0; i<=numbers; i++){
     
	 c=a+b;
	 a=b;
	 b=c;
	 console.log(a);
if(c<=numbers){
	c=a+b;
	 a=b;
	 b=c;
	 console.log(a);
	
}	 
	 
}
