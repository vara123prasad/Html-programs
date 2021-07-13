console.log("vara")
//program to find that number is divisible or not
var num=8;
if(num%7===0? console.log(" 7 is divisible"):console.log(" 7 is not divisible") );
//program to check the number is multiple of 3 or not
var num1=1;
if(num1%3===0? console.log(" 3 is multiple"):console.log("3 is not multiple"));
//PROGRAM TO CHECK THE NUMBER POSITIVE OR NOT
var num2=-1;
if(num2>=0? console.log("positive"):console.log("negative"));
//program to check number having 4 at units place or not


//program to check the number is 3 digit or not
/*var num3=-400;
if((num3>99) && (num3<=999))
    {
        console.log(" its a 3 digit number");
    }
else if((num3>-99) && (num3<=-999))
   {
       console.log(" its a 3 digit number");
   }
   else
   {
       console.log("its not a three digit number");
   }
//write a program the given number is odd or even*/
 
var num3=10;
if(num3%2===0? console.log("even"):console.log("Odd"));
//greatest number in the given two numbers
var a=12;
var b=12;
if(a>b) 
    {
    console.log("a is greater");
    }
    else if(b>a)
    {
        console.log("b is greater");
    } 
    else if(a===b)
    {
        console.log("both are equal")
    }
    //print the least number in given two numbers
    var ab=1;
    var bc=12;
    if(ab<bc) 
    {
    console.log("ab is least");
    }
    else if(bc<ab)
    {
        console.log("bc is least");
    } 
    else if(ab===bc)
    {
        console.log("both are equal");
    }
    //print greatest numbers in three given numbers

    var x=166;
    var y=2;
    var z=0;
    if(x>y && x>z)
        {
            console.log("x is greater");
        }
        else if(y>x && y>z)
        {
            console.log("y is greater");
        }
        else if(z>x && z>x)
        {
            console.log("z is greater");
        }
        

 //print least value in given three numbers
 
    var xa=166;
    var yb=2;
    var zc=0;
    if(xa<yb && xa<zc)
        {
            console.log("xa is least");
        }
        else if(yb<xa && yb<zc)
        {
            console.log("yb is least");
        }
        else if(zc<xa && zc<xa)
        {
            console.log("zc is least");
        }
//print given three numbers in accending order
 
    
    var numbers = [6663,323535,666676,7777,433,335,5,5,5,6,7,7,23,2,5,6,]
    var lowestToHighest = numbers.sort((a, b) => a - b);
    console.log(lowestToHighest);
    
 // program to print given numbers in decending order   
   var numbers1 = [8474,6,88,3325,6777,5787,34226,86588653,36463656,]
   var highestToLowest = numbers.sort((a, b) => b-a);
   console.log(highestToLowest);

  }