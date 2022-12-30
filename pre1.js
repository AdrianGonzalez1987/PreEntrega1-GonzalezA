//que pida datos de usuario (nombre, dni, email, numero de telefono )
//solicite que quiere realizar -- consulta o turto
// si es consulta escribe un texto
//si es turno - seleccionar dia - seleccionar hora
//dia - lunes, miercoles, viernes
//hora - 5 a 8 (5:00 - 5:30, 5:35 - 6:05, 6:10 - 6:40, 6:45 - 7:15, 7:20 - 7:50)
//maximo de personas por dia 5
//mostrar datos del turno

let datosUsuario = alert ("Ahora va ingrsar sus datos")
let i=0;
while(i < 2)
{

var nombre = prompt("Ingrese su Nombre")
var apellido = prompt("Indique su Apellido")
let edad = Number(prompt("Ingrese su Edad"))
var id = Number(prompt("Indique Documento"))
let email = prompt("Coloque su mail")

if (nombre == "", apellido == "", id == "", email == "", edad =="") 
{
    alert("por favor ingresa los datos correctamente");
    i= 1;
}

else 
{
    alert("datos correctos puede continuar")
    i= 2;
}

} //fin del while

pregunta =0
miTurno = 0

    function queHacer (consulta)

    {
            switch (consulta) 
            {
            case "1":
                
                return pregunta = prompt("Coloque en el siguiente recuadro su consulta");    

            case "2":
                alert("Decea cancelar su consulta")
                return;
            }
    }

    function queHacer (turno)
    {
            switch (turno)
            
            {
                
            case "3":
                miTurno = "cita a las 5:00"
                return miTurno;

            case "4":
                miTurno = "cita a las 5:35"
                return miTurno;
                
            case "5":
                miTurno = "cita a las 6:10"
                return miTurno;
                
            case "6":
                miTurno = "cita a las 6:45"
                return miTurno;

            case "7":
                miTurno = "cita a las 7:20"
                return miTurno;
                
            case "8":
                
                return alert("No selecciono ningun turno");
            
            }
        
    }
    
    let queTegustaria = prompt("Elija una opcion \n 1 Si decea hacer una consulta \n 2 Si decea solicitar un turno")
    if (queTegustaria == 1)
    {
        let consulta = prompt("ingresa el que decea realizar \n 1 Para realizar Consultas \n 2 Para Salir")
        alert (queHacer(consulta))

        alert("\n ----Datos--- \n Nombre:   " + nombre + 
                    "\n Apellido:  " + apellido + 
                    "\n Identificacion:  "  + id + 
                    "\n \n Consulta realizada:\n"+   pregunta);
    }
    
    if(queTegustaria == 2) 
    {
        let turno = prompt("Decea realizar un turno: \n Los turnos son de 5 a 7 con una duracion por paciente de 40 minuto: \n 3 entre 5:00 - 5:30 \n 4 entre las 5:35 - 6:05 \n 5 entre las 6:10 - 6:40 \n 6 entre las 6:45 - 7:15 \n 7 entre las 7:20 - 7:50 \n 8 Salir de seleccionar turno ")
        alert (queHacer(turno))
        valor1 ="su turno es a las 5";

        alert("\n ----Datos--- \n Nombre:   " + nombre + 
                    "\n Apellido:  " + apellido + 
                    "\n Identificacion:  "  + id + 
                    "\n \n su turno es a las:\n"+   miTurno);
    }
    
    

        alert("Gracias por usar el servicio")


    
    







