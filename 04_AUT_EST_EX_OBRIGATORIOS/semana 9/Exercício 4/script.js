function calcular(){
    var numero = document.getElementById("numero").value
    var array = []
    var i = 0
    if (numero == 1) {
        array = [1]
        document.getElementById("resultado").innerHTML = array
    }
    else if (numero == 2) {
        array = [1,1]
        document.getElementById("resultado").innerHTML = array
    }
    else if (numero > 2) {
        array = [1,1]
    while (i+2<numero){
        let n = array[i] + array[i+1]
        array.push(n);
        i += 1
        document.getElementById("resultado").innerHTML = array
    }
}
}