var errorEntrada = new Array();

errorEntrada[0] = "errorNota1";
errorEntrada[1] = "errorNota2";
errorEntrada[2] = "errorNota3";
errorEntrada[3] = "errorNota4";
errorEntrada[4] = "errorExamen";

var idRespuesta = new Array();

idRespuesta[0] = "condicionfinal";
idRespuesta[1] = "promparcial";
idRespuesta[2] = "mostrarexamen";
idRespuesta[3] = "promediofinal";

function validar(){
    var valorEntrada = new Array();

    valorEntrada[0] = document.getElementById("nota1").value;
    valorEntrada[1] = document.getElementById("nota2").value;
    valorEntrada[2] = document.getElementById("nota3").value;
    valorEntrada[3] = document.getElementById("nota4").value;
    valorEntrada[4] = document.getElementById("notaexamen").value;

    var contarErrores = 0;
    //Probar errores
    for(i in valorEntrada){
        //Validar que el campo no este vacío
        if(valorEntrada[i] == ""){
            contarErrores++;
            document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>El campo es obligatorio</span>";
        }else if(parseInt(valorEntrada[i]) <10 || parseInt(valorEntrada[i]) > 70){
            //Validar que la nota no sea menor a 10 o mayor a 70
            contarErrores++;
            document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>Ingrese nota válida 10&le;n&le;70</span>";
        }else if(valorEntrada[i].includes(".") || valorEntrada[i].includes(",")){
            //Validar que se incluyan solamente números enteros
            contarErrores++;
            document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>El número debe ser entero</span>";
        }else{
            document.getElementById(errorEntrada[i]).innerHTML = "";
        }
    }
    if(contarErrores == 0){
        //Obtener el promedio si no hay errores
        var sumaNotas = 0;
        for(var i = 0; i<4; i++){
            sumaNotas = sumaNotas + parseInt(valorEntrada[i]);
        }
        promNotas = sumaNotas/4
        if(promNotas < 40 || parseInt(valorEntrada[4])< 40){
            document.getElementById("condicionfinal").innerHTML = "Reprobado";
            cambiarReprobado();
        }else{
            document.getElementById("condicionfinal").innerHTML = "Aprobado";
            cambiarAprobado();
        }
        //Calcular ponderación final
        var promFinal = 0.6*promNotas + 0.4*valorEntrada[4];

        document.getElementById("promparcial").innerHTML = promNotas;
        document.getElementById("mostrarexamen").innerHTML = valorEntrada[4];
        document.getElementById("promediofinal").innerHTML = promFinal;
    }
}

function limpiar(){
    //Limpiamos los campos de errores
    for(i in errorEntrada){
        document.getElementById(errorEntrada[i]).innerHTML = "";
    }
    for(i in idRespuesta){
        document.getElementById(idRespuesta[i]).innerHTML = "";
    }
    
    //Reseteamos los colores de las tablas
    var elemento = document.getElementById("respuesta");
    elemento.classList.remove("aprobado")
    elemento.classList.remove("border-success");
    elemento.classList.remove("reprobado");;
    elemento.classList.remove("border-danger");

    elemento.classList.add("fondo");
    elemento.classList.add("border-primary");
}

function cambiarReprobado(){
    //Cambiamos el color del contenedor en caso de reprobar
    var elemento = document.getElementById("respuesta");
    elemento.classList.remove("fondo");
    elemento.classList.remove("aprobado")
    elemento.classList.remove("border-primary");
    elemento.classList.remove("border-success");

    elemento.classList.add("reprobado");
    elemento.classList.add("border-danger");
}

function cambiarAprobado(){
    //Cambiamos el color del contenedor en caso de aprobar
    var elemento = document.getElementById("respuesta");
    elemento.classList.remove("fondo");
    elemento.classList.remove("reprobado");
    elemento.classList.remove("border-primary");
    elemento.classList.remove("border-danger");

    elemento.classList.add("border-success");
    elemento.classList.add("aprobado");
}

