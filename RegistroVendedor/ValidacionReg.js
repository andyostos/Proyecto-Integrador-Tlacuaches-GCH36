

document.addEventListener("DOMContentLoaded", function  () {
    var form = document.getElementById("registroForm");
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
            return;
        }
  
        
        var nombre = document.getElementById("txtNombre").value;
        var apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        var apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        var ciudad = document.getElementById("txtCiudad").value;
        var email = document.getElementById("txtEmail").value;
        var rfc = document.getElementById("txtRfc").value;
        var fechaNacimiento = document.getElementById("txtBirthday").value;
  
        var nombrePattern = /^[A-Za-z]+$/;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var rfcPattern = /[A-Z0-9],{12,13}/;
  
        if (!nombrePattern.test(nombre)) {
            alert("El campo Nombre solo debe contener letras.");
            return;
        }
  
        if (!nombrePattern.test(apellidoPaterno)) {
            alert("El campo Apellido Paterno solo debe contener letras.");
            return;
        }
  
       if (!nombrePattern.test(apellidoMaterno)) {
        alert("El campo Apellido Materno solo debe contener letras.");
           return;
     }
  
     //   if (!rfcPattern.test(rfc)) {
        //  alert("El campo rfc solo debe contener letras y numeros");
      //    return;
    //  }
  
        if (!nombrePattern.test(ciudad)) {
            alert("El campo Dirección solo debe contener letras.");
            return;
        }
  
        if (!emailPattern.test(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }
        
  
        
        var fechaNacimientoDate = new Date(fechaNacimiento);
          var fechaActual = new Date();
          var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  
          if (edad < 18) {
              alert("Debes ser mayor de 18 años para registrarte.");
              return;
          }
  
        alert("¡Formulario válido! Se ha enviado.");
  
  
  
  
  
      });
  });
  







/*function vdatos() {
    var fechaNacimiento = document.getElementById("txtBirthday").value;

    // Extraer día, mes y año del formato de fecha
    var partesFecha = fechaNacimiento.split("-");
    var dia = parseInt(partesFecha[2]);
    var mes = parseInt(partesFecha[1]) - 1;  // Restar 1 porque los meses en JavaScript van de 0 a 11
    var anio = parseInt(partesFecha[0]);
    
    // Convertir la fecha de nacimiento a un objeto de fecha
    var fechaUsuario = new Date(anio, mes, dia);
    
    // Obtener la fecha actual
    var fechaActual = new Date();
    
    // Calcular la edad
    var edad = fechaActual.getFullYear() - fechaUsuario.getFullYear();
    if (
      fechaActual.getMonth() < fechaUsuario.getMonth() ||
      (fechaActual.getMonth() === fechaUsuario.getMonth() &&
        fechaActual.getDate() < fechaUsuario.getDate())
    ) {
      edad--; // Restar 1 si el usuario no ha cumplido años aún en este año
    }
    
    // Verificar si es mayor de edad
    if (edad >= 18) {
      console.log("Eres mayor de edad. 🎉");
    } else {
      console.log("Eres menor de edad. 👶");
    }



}
*/