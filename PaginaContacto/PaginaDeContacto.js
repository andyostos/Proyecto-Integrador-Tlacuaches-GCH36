document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Captura los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var subject = document.getElementById('asunto').value;
    var message = document.getElementById('msg').value;
    
    // Muestra un mensaje en la consola
    console.log('Información enviada:');
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);
    
    // Muestra un mensaje en la página
    var infoContainer = document.getElementById('end-container-dom');
    infoContainer.innerHTML = '<p>Tu información ha sido enviada con éxito.</p>';
    
    // Borra los campos del formulario después de enviar la información
    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('msg').value = '';
});