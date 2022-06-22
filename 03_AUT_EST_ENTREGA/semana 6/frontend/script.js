window.onload = function(){
        getContato();
}
function botao(){
    $('.bio').append("<h3>Sou Cristiane, brasiliense e apaixonada por inovação e tecnologia</h3>")
}

function teste() {
    console.log("teste")
}
function getContato(){
    var url = "http://127.0.0.1:3071/getContato";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
var result = JSON.parse(xhttp.response);
document.getElementById("telefone").innerHTML = result[0].telefone;
document.getElementById("email").innerHTML = result[0].email;
    //console.log(xhttp.responseText);
}