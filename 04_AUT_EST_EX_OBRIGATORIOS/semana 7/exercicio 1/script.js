$('#somar').on("click",som)
function som(){
     var valor = parseInt(document.getElementById("produto").value)
     var newvalue = valor+1
   $('#produto').append(newvalue)
   console.log(newvalue)
}
$('#subtrair').on("click",sub)
function sub(){
     var valor = document.getElementById("produto").value
     var newvalue = valor-1
   $('#produto').toggle(newvalue)
}