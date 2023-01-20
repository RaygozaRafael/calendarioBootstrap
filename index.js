inicializarDatos();

function inicializarDatos() {
    const d = new Date();
    let dia = d.getDate();
    let mes = d.getMonth() + 1;
    let anio = d.getFullYear();

    document.getElementById('dia').value = dia;
    document.getElementById('mes').value = mes;
    document.getElementById('anio').value = anio;

    detectarDiaSemana(d.getDay());
    anioBisiesto(anio);
}


function checarFechaManualmente() {

    let diaIngresado = document.getElementById('dia').value;
    let mesIngresado = document.getElementById('mes').value;
    let anioIngresado = document.getElementById('anio').value;

    const diaDate = new Date(mesIngresado + " " + diaIngresado + " " + anioIngresado);
    let anio = diaDate.getFullYear();
    console.log(diaDate.getMonth());
    if(Number(mesIngresado)<1 || Number(mesIngresado)>12){
        diaNoValido();
        return 0;
    }
    console.log("a")
    if (verificarMaximoDiasMes(Number(diaIngresado), Number(mesIngresado), Number(anioIngresado))) {
        if (detectarDiaSemana(diaDate.getDay())) {
            anioBisiesto(anio);
        }
    }




}

function verificarMaximoDiasMes(dia, mes, anio) {
    console.log(mes);
    switch (mes) {
        case 1:
            if (dia > 31 || dia < 1) {
                diaNoValido();
            }
            break;
        case 2:
            if (dia > 28 && !anioBisiesto(anio)  || dia < 1) {
                diaNoValido();
            }
            else if (dia > 29  || dia < 1) {
                diaNoValido();
            }
            break;
        case 3:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;
        case 4:
            if (dia > 30  || dia < 1) {
                diaNoValido();
            }
            break;
        case 5:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;
        case 6:
            if (dia > 30  || dia < 1) {
                diaNoValido();
            }
            break;
        case 7:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;
        case 8:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;
        case 9:
            if (dia > 30  || dia < 1) {
                diaNoValido();
            }
            break;
        case 10:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;
        case 11:
            if (dia > 30  || dia < 1) {
                diaNoValido();
            }
            break;
        case 12:
            if (dia > 31  || dia < 1) {
                diaNoValido();
            }
            break;

    }
    return true;
}

function detectarDiaSemana(dia) {
    let dl = ", Dia laborable";
    let dnl = ", Dia no laborable";
    switch (dia) {
        case 1:
            document.getElementById('diaSemana').value = "Lunes" + dl;
            break;
        case 2:
            document.getElementById('diaSemana').value = "Martes" + dl;
            break;
        case 3:
            document.getElementById('diaSemana').value = "Miercoles" + dl;
            break;
        case 4:
            document.getElementById('diaSemana').value = "Jueves" + dl;
            break;
        case 5:
            document.getElementById('diaSemana').value = "Viernes" + dl;
            break;
        case 6:
            document.getElementById('diaSemana').value = "Sabado" + dnl;
            break;
        case 0:
            document.getElementById('diaSemana').value = "Domingo" + dnl;
            break;
        default:
            console.log("Error detectarDiaSemana " + dia);
            diaNoValido();
            break;

    }
    return true;
}

function diaNoValido() {
    alert("Ingrese una fecha valida");
    inicializarDatos();
    return false;
}

function anioBisiesto(anio) {
    if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) {
        return true;
        /* document.getElementById('bis').value = "es bisiesto"; */
    }
    else {
        return false;
        /* document.getElementById('bis').value = "no es bisiesto"; */
    }
}