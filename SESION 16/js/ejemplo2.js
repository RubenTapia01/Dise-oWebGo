function compara(){
    var a=2;
    var b=4;
    if(a==b)
    alert("a y b son diferentes");
    else
    alert("a y b son diferentes ");
 
}

function resta(x,y){
    var rest=x-y;
    document.write("<h2> la resta es"+rest +"</h2>");
}
function suma(a,b){
    var sum=a+b;
    document.getElementById("sumar").innerHTML="La suma es"+sum;
}

function escribir(){
    valor=document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML=' '+valor;
}