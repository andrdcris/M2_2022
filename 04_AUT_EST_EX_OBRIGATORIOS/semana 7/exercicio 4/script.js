$('#btn').on("click", function () {
    var pessoas = parseInt($("#pessoas").val());
    var tipo = parseInt($("#tipo").val());

    if(tipo == "diurno" && pessoas >= 50){
        var total = pessoas*200
        var res = total * 0.40
        $("#resultado").val(res)
        console.log(res)
    }else{
        $("#resultado").val(total)
    }

    if (tipo == "noturno" && pessoas >= 50) {
        var total = pessoas*100
        var res = total * 0.40
        $("#resultado").val(res)
    } else {
        $("#resultado").val(total)
    }
})
