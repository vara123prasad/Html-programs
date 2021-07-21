//create a array in obect
let arr=[1,3,3,56,77,888,"vamsi",2.56,32]
//acces items from array in script
  console.log (arr[6]);
//accesing last item from array
console.log(arr[arr.length-1]);
//acccesing all items from loop
console.log("------     --------   ----------   ----------");
for(i=0; i<arr.length; i++){
	console.log(arr[i]);
}
//create of object
let pen=
         {
			 name:'varaprasad',
		     salary:'5000', 
		 
		 pencompany : function (){
			 var a=1;
			 var b=2;
			 result=a+b;
			 console.log(result);
			 			
		 }
			 
		 }
pen.pencompany();
//accesing array of object item
let emp=[
           {name      :"varaprasad",
		    sal       :3444,
		    locations :"bangalore"
		   },
		   {name      :"vara",
		    sal       :4444,
		    locations :"hyd"
		   },
		   {name      :"prasad",
		    sal       :34434,
		    locations :"chennai"
		   }
		];
		  for(employees of emp)
		  {
			  if(employees.locations=="hyd")
			  {
				  console.table(employees);
			  }	  
		  }
		  
//two dimentional array
let activities=[  ];
let activities1=[['work',9],
                ['eat',1],
				['commute',2],
				['play game',1],
				['sleep',7]
			    ]
				console.table(activities1);
				console.log(activities);
				activities1.push(['study',1]);
				console.table(activities1)
				activities1.splice(1,0,['programing',4])
				console.table(activities1);
				rbg=activities1.slice(0,2);
				console.table(rbg);
				
//
				
				
//
               

 		 
		 