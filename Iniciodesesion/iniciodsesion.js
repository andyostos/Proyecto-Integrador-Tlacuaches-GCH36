var usuariosPermitidos = [
    { Email: "prometeo@gmail.com", Contrasena: "12345", pagina: "MiPerfil.html" },
    { Email: "karladiaz@gmail", Contrasena: "666456", pagina: "MiPerfil.html" },
    // base de datos ficticia simulador
];

function validarLogin() {
    var password = document.getElementById("Contrasena").value;
    var email = document.getElementById("Email").value;

    for (var i = 0; i < usuariosPermitidos.length; i++) {
        if (password === usuariosPermitidos[i].Contrasena && email === usuariosPermitidos[i].Email) {
            window.location.href = usuariosPermitidos[i].pagina;
            return false; // Detener el envío del formulario
        }
    }

    alert("Credenciales incorrectas o usuario no encontrado");
    return false; // Detener el envío del formulario
}