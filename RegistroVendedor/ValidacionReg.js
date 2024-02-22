
document.addEventListener("DOMContentLoaded", function () {
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

      if (!rfcPattern.test(rfc)) {
        alert("El campo rfc solo debe contener letras y numeros");
        return;
    }

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

         if (edad === 18) {
             alert("Debes ser mayor de 18 años para registrarte.");
             return;
         }

       alert("¡Formulario válido! Puedes enviarlo.");
    
    });
});


