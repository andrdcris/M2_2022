function calcular(){
   var numero = document.getElementById("numero").value;
   var centena = parseInt(numero[0]);

   if ((centena%2) == 0) {

    $("#resultado").html('O número da centena é par');
   }
   else{
    $("#resultado").html('O número da sentena é impar')
   }
}