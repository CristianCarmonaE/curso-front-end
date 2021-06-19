var errorEntrada = new Array();

errorEntrada[0] = "errorNombre";
errorEntrada[1] = "errorApellido";
errorEntrada[2] = "errorRut";
errorEntrada[3] = "errorEmail";
errorEntrada[4] = "errorContraseña";
errorEntrada[5] = "errorConfirmacion";


var suma = 0;

function sumarCarrito(precio){
    suma = suma + precio;
    console.log(suma);
}

function mostrarTotal(){
    var elemento = document.getElementById("mostrarTotal");
    elemento.classList.add("bg-light")  

    document.getElementById("mostrarTotal").innerHTML = "El total de la compra es: " + suma;
    
}

function validar(){
    var valorEntrada = new Array();

    valorEntrada[0] = document.getElementById("nombre").value;
    valorEntrada[1] = document.getElementById("apellido").value;
    valorEntrada[2] = document.getElementById("rut").value;
    valorEntrada[3] = document.getElementById("email").value;
    valorEntrada[4] = document.getElementById("password").value;
    valorEntrada[5] = document.getElementById("confirmarpassword").value;

    var contarErrores = 0;
    //Probar errores
    for(i in valorEntrada){
        //Validar que el campo no este vacío
        if(valorEntrada[i] == ""){
            contarErrores++;
            document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>El campo es obligatorio</span>";
        }else if(i == 1 || i == 0){
            //Validar que el nombre y el apellido sean de un mínimo de 2 caracteres y un máximo de 20
            if(valorEntrada[i].length < 2 || valorEntrada[i].length > 20){
                contarErrores++;
                document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>Error campo inválido</span>";
            }else{
                document.getElementById(errorEntrada[i]).innerHTML = "";
            }
        }else if(i == 2){
            //Validar el rut
            if(valorEntrada[i] < 8 || valorEntrada[i] > 9){
                contarErrores++;
                document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>Rut inválido</span>";
            }else{
                document.getElementById(errorEntrada[i]).innerHTML = "";
            }
        }else if(i == 5){
            if(valorEntrada[4] != valorEntrada [5]){
                document.getElementById(errorEntrada[i]).innerHTML = "<span class='d-block bg-danger text-white'>Las contraseñas deben ser iguales</span>";
            }else{
                document.getElementById(errorEntrada[i]).innerHTML = "";
            }
        }else{
            document.getElementById(errorEntrada[i]).innerHTML = "";
        }
    }
    if(contarErrores == 0){
        //Obtener el promedio si no hay errores
        
    }
}

function limpiar(){
    //Limpiamos los campos de errores
    for(i in errorEntrada){
        document.getElementById(errorEntrada[i]).innerHTML = "";
    }
}



