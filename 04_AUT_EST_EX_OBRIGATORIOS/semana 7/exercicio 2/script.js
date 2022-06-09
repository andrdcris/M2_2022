
$('#trocar').on("click",trocar)
function trocar(){
     var valor1 = document.getElementById("valor1").value
     var valor2 = document.getElementById("valor2").value
   $('#valor1').val(valor2)
   $('#valor2').val(valor1)
}
