function calcular(){
    var numero = document.getElementById("numero").value;
    var num1 = parseInt(numero[0]);
    var num2 = parseInt(numero[1]);
    var soma = parseInt(num1+num2);

     $("#resultado").html(`A soma dos algarismos é:${soma}`);
  
 }