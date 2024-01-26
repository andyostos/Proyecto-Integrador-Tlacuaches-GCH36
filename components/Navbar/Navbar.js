document.addEventListener('DOMContentLoaded', function () {
    // Cargar Navbar.html
    fetch('Navbar.html')
      .then(response => response.text())
      .then(html => {
        // Manipular el DOM 
        let navbarContainerDOM = document.getElementById('navbar-container-dom');
        navbarContainerDOM.innerHTML = html;
  
      })
      .catch(error => console.error('Error al cargar Navbar.html:', error));
  });

