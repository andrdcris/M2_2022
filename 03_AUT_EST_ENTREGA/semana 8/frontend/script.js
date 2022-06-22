window.onload = function () {
    getContato();
    get();
}
var idGlobal ;
function botao() {
    $('.bio').append("<h3>Sou Cristiane, brasiliense e apaixonada por inovação e tecnologia</h3>")
}

function teste() {
    console.log("teste")
}
function getContato() {
    var url = "http://127.0.0.1:3071/getContato";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    var result = JSON.parse(xhttp.response);
    document.getElementById("telefone").innerHTML = result[0].telefone;
    document.getElementById("email").innerHTML = result[0].email;
    //console.log(xhttp.responseText);
}

function inserir() {
    var habilidade = document.getElementById("habilidade").value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3071/insertHabilidade',
        data: { habilidade: habilidade },
    }).done(function () {
        get();
    }).fail(function (msg) {
    }).always(function (msg) {
    });

}

function get() {
    $.ajax({
        url: 'http://127.0.0.1:3071/getHabilidade',
        type: 'GET',
        success: data => {
            var lista = '';
            data.forEach(element => {
                lista += `<li>${element.habilidade} <button onclick="deleteHabilidade(${element.id})">X</button> <button onclick="ativar(${element.id},'${element.habilidade}')">Editar</button></li>`;
            });
            $('#listaHabilidades').html(lista);
        }
    });

}

function deleteHabilidade(id) {

    if (confirm('Confirma a exclusão?')) {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3071/deleteHabilidade',
            data: { id: id },
        }).done(function () {
            get();
        }).fail(function (msg) {

        }).always(function (msg) {

        });
    }
}

function ativar(id, habilidade) {
    debugger
    idGlobal = id;
    document.getElementById("editarHabilidade").value = habilidade;
}

function updateHabilidade() {
    var habilidade = document.getElementById("editarHabilidade").value;
    debugger
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3071/updateHabilidade',
        data: { id: idGlobal, habilidade:habilidade },
    }).done(function () {
        get();
    }).fail(function (msg) {

    }).always(function (msg) {

    });


}