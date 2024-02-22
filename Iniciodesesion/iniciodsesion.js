var usuariosPermitidos = [
    { Email: "prometeo@gmail.com", Contrasena: "12345", pagina: "MiPerfil.html" },
    { Email: "karladiaz@gmail.com", Contrasena: "666456", pagina: "MiPerfil.html" },
    // base de datos ficticia simulador
];

function validarLogin() {
    var password = document.getElementById("Contrasena").value;
    var email = document.getElementById("Email").value;

    for (var i = 0; i < usuariosPermitidos.length; i++) {
        if (password === usuariosPermitidos[i].Contrasena && email === usuariosPermitidos[i].Email) {
            localStorage.setItem("username", email);
            window.location.href = usuariosPermitidos[i].pagina;
            return false; // Detener el envío del formulario
        }
    }

    alert("password  incorrecto o usuario no encontrado");
    return false; // Detener el envío del formulario
}

window.onload = function() {
    var storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      // Si hay una sesión almacenada, pues se redirige a la pagina mencionada en el array de arriba
      window.location.href = usuariosPermitidos.find(user => user.Email === storedUsername).pagina;
    }
  };