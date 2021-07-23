
/*// generating a random number
const a = Math.random() * (10-1) + 1
console.log(a);
//add natural numbers using recurssion 
let numbers=[1,5,9,8,6,7,8,9,10];
let temp=numbers[0]-numbers[1];
let t;
for(i=0;i<=numbers.length-1;i++){  
	
	for(j=0;j<=numbers.length-1;j++){
		t=numbers[i]-numbers[j];
 if(t>temp)
 {
	 temp=t;
 }
		
		
	}
		
 
}
console.log(temp); */
//to check prime number
// program to check if a number is prime or not

// take input from the user
//let num=12;
for(let i=2; i<=100;i++)
{
	   flag=true;
		for(let j=2; j<=i/2; j++){
	        if(i%j===0){
				flag=false;
				break;
			}		
			
		}
     	if(flag){ console.log(i);}
	
}	

//reversde the number
let aww=[3,5,5,3,23,65,3,54,3,5,7]
aww.reverse();
console.log(aww);
      
			  
         