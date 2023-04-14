function validaFechaMenor() {
    let fechaInput = document.getElementById("fecha");
    let fecha = fechaInput.value;
    let hoy = new Date();
    let dia = new Date(fecha).getDate()+1;
    if(dia>31) dia--;

    if (fecha == "")
        alert(
            "Faltan datos"
        ); //Validar primero que el campo de fecha esté con datos
    else {
        if (new Date(fecha) < hoy.getTime()) {
            //Validar que la fecha sea menor a la fecha actual
            crearSigno(dia, new Date(fecha).getMonth() + 1);
        } else alert("La fecha debe ser menor a la fecha actual.");
    }
}

function crearSigno(nDia, nMes) {
    var newDiv = document.createElement("div");
    var saltoLinea = document.createElement("br");
    var newContent = "";
    var numerosSuerte = "";
    if ((nDia > 20 && nMes == 3) || (nDia < 20 && nMes == 4)) {
        newContent = document.createTextNode("SIGNO ARIES");
        numerosSuerte = document.createTextNode("No. de la suerte: 7, 17 y 21.");
        newDiv.appendChild(newContent);
        newDiv.appendChild(saltoLinea);
        newDiv.appendChild(numerosSuerte);
        newDiv.style = "border: 3px solid #999999; background-color:#FFFF00; width: 200px ;height:300px ";
    } else {
        if ((nDia >= 20 && nMes == 4) || (nDia <= 21 && nMes == 5)) {
            newContent = document.createTextNode("SIGNO TAURO");
            numerosSuerte = document.createTextNode("No. de la suerte: 4, 6 y 11.");
            newDiv.appendChild(newContent);
            newDiv.appendChild(saltoLinea);
            newDiv.appendChild(numerosSuerte);
            newDiv.style = "border: 3px solid #999999; background-color:#FF00EC; width: 200px ;height:300px ";
        } else {
            if ((nDia > 20 && nMes == 5) || (nDia <= 20 && nMes == 6)) {
                newContent = document.createTextNode("SIGNO GEMINIS");
                numerosSuerte = document.createTextNode("No. de la suerte: 2, 4, 7 y 9.");
                newDiv.appendChild(newContent);
                newDiv.appendChild(saltoLinea);
                newDiv.appendChild(numerosSuerte);
                newDiv.style = "border: 3px solid #999999; background-color:#00FF00; width: 200px ;height:300px ";
            } else {
                if ((nDia > 20 && nMes == 6) || (nDia <= 22 && nMes == 7)) {
                    newContent = document.createTextNode("SIGNO CANCER");
                    numerosSuerte = document.createTextNode("No. de la suerte:  5, 6, 8 y 19.");
                    newDiv.appendChild(newContent);
                    newDiv.appendChild(saltoLinea);
                    newDiv.appendChild(numerosSuerte);
                    newDiv.style = "border: 3px solid #999999; background-color:#FF0000; width: 200px ;height:300px ";
                } else {
                    if ((nDia > 22 && nMes == 7) || (nDia <= 22 && nMes == 8)) {
                        newContent = document.createTextNode("SIGNO LEO");
                        numerosSuerte = document.createTextNode("No. de la suerte:  1, 9 y 10.");
                        newDiv.appendChild(newContent);
                        newDiv.appendChild(saltoLinea);
                        newDiv.appendChild(numerosSuerte);
                        newDiv.style = "border: 3px solid #999999; background-color:#FF8700; width: 200px ;height:300px ";
                    } else {
                        if ((nDia >= 23 && nMes == 8) || (nDia <= 22 && nMes == 9)) {
                            newContent = document.createTextNode("SIGNO VIRGO");
                            numerosSuerte = document.createTextNode("No. de la suerte: 10, 15 y 27.");
                            newDiv.appendChild(newContent);
                            newDiv.appendChild(saltoLinea);
                            newDiv.appendChild(numerosSuerte);
                            newDiv.style = "border: 3px solid #999999; background-color:#0059FF; width: 200px ;height:300px ";
                        } else {
                            if ((nDia > 22 && nMes == 9) || (nDia <= 22 && nMes == 10)) {
                                newContent = document.createTextNode("SIGNO LIBRA");
                                numerosSuerte = document.createTextNode("No. de la suerte: 2, 8 y 19");
                                newDiv.appendChild(newContent);
                                newDiv.appendChild(saltoLinea);
                                newDiv.appendChild(numerosSuerte);
                                newDiv.style = "border: 3px solid #999999; background-color:#00D8FF; width: 200px ;height:300px ";
                            } else {
                                if ((nDia > 22 && nMes == 10) || (nDia <= 21 && nMes == 11)) {
                                    newContent = document.createTextNode("SIGNO ESCORPIO");
                                    numerosSuerte = document.createTextNode("No. de la suerte: 3, 8 y 13.");
                                    newDiv.appendChild(newContent);
                                    newDiv.appendChild(saltoLinea);
                                    newDiv.appendChild(numerosSuerte);
                                    newDiv.style = "border: 3px solid #999999; background-color:#FF8700; width: 200px ;height:300px ";
                                } else {
                                    if ((nDia >= 22 && nMes == 11) || (nDia <= 21 && nMes == 12)) {
                                        newContent = document.createTextNode("SIGNO SAGITARIO");
                                        numerosSuerte = document.createTextNode("No. de la suerte: 9, 14 y 23.");
                                        newDiv.appendChild(newContent);
                                        newDiv.appendChild(saltoLinea);
                                        newDiv.appendChild(numerosSuerte);
                                        newDiv.style = "border: 3px solid #999999; background-color:#00FF00; width: 200px ;height:300px ";
                                    } else {
                                        if ((nDia > 21 && nMes == 12) || (nDia <= 19 && nMes == 1)) {
                                            newContent = document.createTextNode("SIGNO CAPRICORNIO");
                                            numerosSuerte = document.createTextNode("No. de la suerte: 3, 6 y 16.");
                                            newDiv.appendChild(newContent);
                                            newDiv.appendChild(saltoLinea);
                                            newDiv.appendChild(numerosSuerte);
                                            newDiv.style = "border: 3px solid #999999; background-color:#800080; width: 200px ;height:300px ";
                                        } else {
                                            if ((nDia >= 20 && nMes == 1) || (nDia <= 18 && nMes == 2)) {
                                                newContent = document.createTextNode("SIGNO ACUARIO");
                                                numerosSuerte = document.createTextNode("No. de la suerte: 7, 14 y 20.");
                                                newDiv.appendChild(newContent);
                                                newDiv.appendChild(saltoLinea);
                                                newDiv.appendChild(numerosSuerte);
                                                newDiv.style = "border: 3px solid #999999; background-color:#00D8FF; width: 200px ;height:300px ";
                                            } else {
                                                if ((nDia >= 19 && nMes == 2) || (nDia <= 20 && nMes == 3)) {
                                                    newContent = document.createTextNode("SIGNO PICIS");
                                                    numerosSuerte = document.createTextNode("No. de la suerte: 5, 11 y 19.");
                                                    newDiv.appendChild(newContent);
                                                    newDiv.appendChild(saltoLinea);
                                                    newDiv.appendChild(numerosSuerte);
                                                    newDiv.style = "border: 3px solid #999999; background-color:#FF00CD; width: 200px ;height:300px ";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}
