var mas = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
var a = -1;  

function right() 
{ 
 var obj = document.getElementById("img");
  if (a < mas.length-1)  
  a++ ;
   else
     a = 0;
     obj.src = mas[a];	 
}

function left() 
{     
 var obj = document.getElementById("img");
if (a> 0)
 a--;
  else
    a = mas.length-1;
    obj.src = mas[a];	  			 
}