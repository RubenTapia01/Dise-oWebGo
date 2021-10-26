function MetodogetElementById() {
    x = document.getElementById("intro").innerHTML;
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementById: " + x + "</p>");
}


function MetodogetElementsByTagName() {
    y = document.getElementsByTagName("p");
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementsByTagName: " + y[1].innerHTML + "</p>");
}

function MetodogetElementsByClassName(){
    z = document.getElementsByClassName("letras");
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementsByClassName: " + z[1].innerHTML + "</p>");
}

function obtenerTotal(){
    a = parseInt(document.getElementsByClassName("precio")[0].innerHTML,10);
    b = parseInt(document.getElementsByClassName("precio")[1].innerHTML,10);
    var sum = a+b;
    document.getElementById("total").innerHTML = sum;
}


function vertotal(){
    x = document.getElementById("total").innerHTML;
    document.write("<h2>El monto total es: " + x + "</h2>");
}