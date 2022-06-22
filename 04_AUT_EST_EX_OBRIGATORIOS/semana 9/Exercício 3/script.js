var nome1 
var nome2 
var nome3

function calcular(){
    var nome = document.getElementById("nome").value;
   

    if (nome1 == null){
        nome1 = nome;
        document.getElementById("nome").value = "";
        document.getElementById("instrucao").innerHTML="Insira o segundo nome";

    }
    else if (nome2 == null){
        nome2 = nome;
        document.getElementById("nome").value = "";
        document.getElementById("instrucao").innerHTML="Insira o Terceiro nome";
    }
    else if (nome3 == null) {
        nome3 = nome
        document.getElementById("nome").value = "";
        console.log(nome1+nome2+nome3);
        var array = [nome1,nome2,nome3];
        var arrayOrdenada = array.sort()
        document.getElementById("ordem").innerHTML=(arrayOrdenada[0] + " " + arrayOrdenada[1] + " " + arrayOrdenada[2])
    }

 }