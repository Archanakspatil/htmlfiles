function add()
{ a=document.getElementById("a").value;
  b=document.getElementById("b").value;
  a=parseInt(a);
  b=parseInt(b);
  c=a+b;
  document.getElementById("r").value=c;
  c=a-b;
  document.getElementById("r").value=c;
  c=a*b;
  document.getElementById("r").value=c;
  c=a/b;
  document.getElementById("r").value=c;
  c=a%b;
  document.getElementById("r").value=c;

}