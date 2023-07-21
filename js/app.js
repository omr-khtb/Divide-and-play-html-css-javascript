let f,d1,d2,i,v,z,choice,ct,nm1ct,pastd2,o ;
o = 1;
let check = 0;
nm1ct = 1;
let x= [];
let choicee  = document.getElementById("choice");
let f11  = document.getElementById("num");
let d11  = document.getElementById("d1");
let d22  = document.getElementById("d2");
hide();
function hide()
{
    choicee.style.display = "none";
    d11.style.display = "none";
    d22.style.display = "none";
    
}

function calc()
{
    if(check>0)
    {
    choicee.style.display = "block";
    }
    d11.style.display = "block";
    d22.style.display = "block";
    f11.style.display = "none";
    if(nm1ct == 1)
    {
       f = document.getElementById("num").value;
       x[0] = f;
       console.log(x)
       nm1ct++;
       check++;
       for(i=1;i<15;i++){x[i]=0;}

    }
    else
    {

       document.getElementById("result").innerHTML = x;
       choice = document.getElementById("choice").value;
       if(choice == ""){choice = 1;}
       d1 = document.getElementById("d1").value;
       d2 = document.getElementById("d2").value;
       if(d1 *d2 == x[choice-1] && d1 != 1 && d2 != 1 && choice != 0)
       {
        document.getElementById("error").innerHTML = "";
       if(pastd2 != d2 )
       {
       x[choice-1] = d1;
       x[o] = d2;
       pastd2 = d2;
       
       
       ct = 0;
       for(v=0;v<15;v++)
	   { 
		  for(z=2;z<x[v];z++)
		  {
		      if(x[v] % z == 0)
		       {
				 
			      ct++;
		       }
	       }
	   }
       if(ct == 0)
       {  
           if(o % 2 ==0)
           { document.getElementById("winner").innerHTML = "congrats player2"; }
           else
           { document.getElementById("winner").innerHTML = "congrats player1";}
       }
       o++;
    }
}
    
    else
    {
        if(d1 == 1 || d2 == 1){document.getElementById("error").innerHTML = "DONT CHOOSE ONE!";}
        else{document.getElementById("error").innerHTML = "choose 2 divisours of the selected number";}
    }
    
}
   document.getElementById("result").innerHTML = x;
}
document.getElementById("btn").addEventListener("click",calc);