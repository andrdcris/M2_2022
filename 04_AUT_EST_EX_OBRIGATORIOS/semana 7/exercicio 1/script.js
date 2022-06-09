$('#somar').on("click",som)
function som(){
     var valor = parseInt(document.getElementById("produto").value)
     var newvalue = valor+1
   $('#produto').val(newvalue)
}
$('#subtrair').on("click",sub)
function sub(){
     var valor = parseInt(document.getElementById("produto").value)
     var newvalue = valor-1
   $('#produto').val(newvalue)
}