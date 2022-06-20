
console.log("Se nota que todavia me extrañas");

setInterval(cambiarSaludo, 3000);

function cambiarSaludo(){
    
    let frase = document.getElementsByTagName("h2")[0].innerHTML ;
    console.log(+frase);
if (document.getElementsByTagName("h2")[0].innerHTML == "Ganando como siempre"){
    document.getElementsByTagName("h2")[0].innerHTML = "Impongo moda para las ninas";
}
else {
    document.getElementsByTagName("h2")[0].innerHTML = "Ganando como siempre";
}
console.log("frase : "+ document.getElementsByTagName("h2")[0].innerHTML);
}