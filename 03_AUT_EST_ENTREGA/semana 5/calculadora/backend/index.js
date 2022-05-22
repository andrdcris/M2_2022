//criado uma função, oper, quando a seleção da contar for escolhida inicia o bloco de codigo
function calcular(oper) {
    //são colocadas nas variaveis os valores pegado no formulario, não foi utilizado .documentById nem QuerySelector
    var valor1 = document.calculadora.valor1.value;
    var valor2 = document.calculadora.valor2.value;
 
    if (oper == "somar") {
       var res = parseInt(valor1) + parseInt(valor2);
       //A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
       //primeira operação da lista
    } 
    else {
       if (oper == "subtrair") {
          var res = valor1-valor2;
       } 
       else {
          if (oper == "multiplicar") {
             var res = valor1*valor2;
          }
         else {
             var res = valor1/valor2;
          }
       }
    }
 
    document.calculadora.res.value = res;
    //nessa função res será o resultado da função, não o res de requisição
 }