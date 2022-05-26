function calcular(){
    var valor = document.querySelector("#valor").value
    var nota100 = Math.floor (valor/100)
    var nota50 = Math.floor ((valor - (nota100*100))/50)
    var nota20 = Math.floor ((valor - ((nota100*100)+(nota50*50)))/20)
    var nota10 = Math.floor ((valor - ((nota100*100)+(nota50*50)+(nota20*20)))/10)
    var nota5 = Math.floor ((valor - ((nota100*100)+(nota50*50)+(nota20*20)+(nota10*10)))/5)
    var nota2 = Math.floor ((valor - ((nota100*100)+(nota50*50)+(nota20*20)+(nota10*10)+(nota5*5)))/2)
    var nota1 = (valor - ((nota100*100)+(nota50*50)+(nota20*20)+(nota10*10)+(nota5*5)+(nota2*2)))

    document.getElementById("not100").innerHTML=`${nota100}  nota(s) de 100`
    document.getElementById("not50").innerHTML=`${nota50}  nota(s) de 50`
    document.getElementById("not20").innerHTML=`${nota20}  nota(s) de 20`
    document.getElementById("not10").innerHTML=`${nota10}  nota(s) de 10`
    document.getElementById("not5").innerHTML=`${nota5}  nota(s) de 5`
    document.getElementById("not2").innerHTML=`${nota2}  nota(s) de 2`
    document.getElementById("not1").innerHTML=`${nota1}  nota(s) de 1`

    console.log (nota100)
}

