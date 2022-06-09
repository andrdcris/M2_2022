$('#btn').on("click", function () {
    var pessoas = parseInt($("#pessoas").val());
    var tipo = $("#tipo").val();
    var totalN = pessoas * 200;
    var totalD = pessoas * 100;
    if (tipo == "noturno" && pessoas >= 50) {
        var desc = totalN * 0.40;
        var res = totalN - desc;
        $("#resultado").html(res);
    } else if (tipo == "noturno" && pessoas <= 50) {
        $("#resultado").html(totalN);
    }

    if (tipo == "diurno" && pessoas >= 50) {
        var res = totalD * 0.40;
        var res = totalD - desc;
        $("#resultado").html(res);
    } else if (tipo == "diurno" && pessoas <= 50) {
        $("#resultado").html(totalD);
    }
})
