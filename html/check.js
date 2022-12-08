function verify()
{  p1=document.getElementById("p1").value;
   p2=document.getElemenyById("p2").value;
   if(!p1)
     {  alert("password is empty please re-enter");
        document.getElementById("p1").focus();
        document.getElementById("p1").select();
     }
   else if(p1!=p2)
      {  alert("password mismatches");
         document.getElementById("p1").focus();
         documwnt.getElementById("p2").select();
      }
   else
     alert("password matches ");
}