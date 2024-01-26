
document.getElementById('boton').addEventListener('click', function(event) {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    if (!isValidEmail(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        event.preventDefault();
    } else {
        alert('Gracias por suscribirte con la dirección de correo electrónico: ' + email);
    }
});

    