var nombre = localStorage.getItem('nombre');
        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        var username = localStorage.getItem('')

        // Mostrar datos en la página siguiente
        document.getElementById('nombre').innerText = nombre;
        document.getElementById('email').innerText = email;
        document.getElementById('password').innerText = password;





document.querySelector('#').addEventListener('click', (ev) => {
    let field = ev.target;
    field.contentEditable = field.contentEditable === true ? false: true;
  });


  const f = document.querySelector('#inputTelefono');

f.addEventListener('submit', (ev) => {
  let but = f.querySelector('input');
  but.type = (but.type === 'search') ? 'submit' : 'search';
  ev.preventDefault();
});