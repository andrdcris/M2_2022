//criado uma função, oper, quando a seleção da contar for escolhida inicia o bloco de codigo
function calcular(oper) {
   //são colocadas nas variaveis os valores pegado no formulario, não foi utilizado .documentById nem QuerySelector
   var valor1 = document.calculadora.valor1.value;
   var valor2 = document.calculadora.valor2.value;

   switch (oper) {
      case "somar":
         var res = parseInt(valor1) + parseInt(valor2);
         break;
      case "subtrair":
         var res =  parseInt(valor1) -  parseInt(valor2);
         break;
      case "multiplicar":
         var res =  parseInt(valor1) *  parseInt(valor2);
         break;
      case "dividir":
         var res =  parseInt(valor1) /  parseInt(valor2);
         break;
      case "dividirInt":
         var res = Math.trunc ( parseInt(valor1) /  parseInt(valor2));
         break;
      case "dividirRest":
         var res =  parseInt(valor1) % parseInt(valor2);
         break;
   }

   document.calculadora.res.value = res;
   //nessa função res será o resultado da função, não o res de requisição
}