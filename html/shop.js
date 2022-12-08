function buy(elm)
{  p=document.getElementById("p").value;
   r=document.getElementById("r").value;
   q=document.getElementById("q").value;
   r=parseInt("r");
   q=parseInt("q");
   tp=r*q;
    document.getElementById("t").value=tp;
   switch(elm)
   {  case "d": ds=(tp*10)/100;
                a=tp-ds;
                document.getElementById("ds").value=ds;
                document.getElementById("a").value=a;
                break;

     case "h": ds=(tp*15)/100;
                a=tp-ds;
                document.getElementById("ds").value=ds;
                document.getElementById("a").value=a;
                break;

    case "z": ds=(tp*20)/100;
                a=tp-ds;
                document.getElementById("ds").value=ds;
                document.getElementById("a").value=a;
                break;
   }

   
   
}