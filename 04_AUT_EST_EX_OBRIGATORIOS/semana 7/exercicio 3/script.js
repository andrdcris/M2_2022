$(document).ready(function(){
    $("#enviar").on("click", function(){
        var telefone = $("#number").val();
        var parte1 = telefone.slice(4,9);
        var parte2 = telefone.slice(9,10);
        var parte3 = telefone.slice(10,16);
        
        if((telefone[0] == "(") && (telefone [3] ==")") && (parte2 == "-") && (parte1.length == 5) && (parte3.length == 4)){
            alert("Telefone correto");
        } else{
            alert("Formato de telefone incorreto!");
        }
    })
})