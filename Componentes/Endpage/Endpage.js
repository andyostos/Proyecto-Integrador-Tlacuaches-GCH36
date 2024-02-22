document.addEventListener('DOMContentLoaded', function () {
    // Cargar Navbar.html
    fetch('Endpage.html')
      .then(response => response.text())
      .then(html => {
        // Manipular el DOM 
        let endContainerDOM = document.getElementById('end-container-dom');
        endContainerDOM.innerHTML = html;
  
      })
      .catch(error => console.error('Error al cargar Navbar.html:', error));
  });
