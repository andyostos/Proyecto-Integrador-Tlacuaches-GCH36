




document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
    
    //Artista Pintor
    {
        id: 1,
        primerNombreV: 'Vasili',
        primerApellidoV: "Kandinski ",
        segundoApellidoV: "Vasílievich",
        correoElectronicoV:'VasilK@gmail.com',
        ciudadV:"Moscú",
        edadV:147,
        rfc:"FGRDSAREP40",
        categoriaV: 'Pintor',
        imagenObra:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        imagenPerfilV:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        nombreDeUsuarioV:'Vasili Kandinski',
        contrasenaV: '1234'
    },

    //Artista Escritor
    {
        id: 2,
        primerNombreV: 'Manuel',
        primerApellidoV: "Altamirano",
        segundoApellidoV: "Basilio",
        correoElectronicoV:'valtamirano@gmail.com',
        ciudadV:"Guerrero",
        edadV:190,
        rfc:"89097LLL90OP",
        categoriaV: 'Escritor',
        imagenObra:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        imagenPerfilV:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        nombreDeUsuarioV:'AltamiranodeTixtla',
        contrasena: "1234",
    },
    //Artista1 Músico
        {
            id: 3,
            primerNombreV: 'Piotr',
            primerApellidoV: "Ilich",
            segundoApellidoV: "Tchaikovsky",
            correoElectronicoV:'contactoTchaikovsky@gmail.com',
            ciudadV:"San Petersburgo",
            edadV:53,
            rfc:"TCHAIKOVSKY12",
            categoriaV: 'Musico',
            imagenObra:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            imagenPerfilV:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            nombreDeUsuarioV:'Piotr Tchaikovsky',
            contrasena: '1234',
        },

    //Artista Escultor 
        {
            id: 4,
            prnombre: 'Miguel',
            primerApellidoV: "Ángel",
            segundoApellidoV: "Buonarroti",
            correoElectronicoV:'contacto.MiguelAngel@gmail.com',
            ciudadV:"Florencia",
            edadV:83,
            rfc:"MANGEL888888",
            categoriaV: 'Escultor',
            imagenObra:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            imagenPerfilV:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            nombreDeUsuarioV:'Miguel Angelo',
            contrasena:'1234'
        },

    //Artista Fotógrafo 
        {
            id: 5,
            primerNombreV: 'Alfred',
            primerApellidoV: "Eisenstaedt",
            segundoApellidoV: "Eisenstaedt",
            correoElectronicoV:'alfredeisenstaedt@gmail.com',
            ciudadV:"Dirschau, Prusia Occidental ",
            edadV:53,
            rfc:"18981995ALEI",
            categoriaV: 'Fotografo',
            imagenObra:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            imagenPerfilV:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            nombreDeUsuarioV:'Alfred Eisenstaedt',
            contrasena:'1234',
        },
    
    ]

    // URL de la API que deseas conectar
// URL de la API que deseas conectar
const apiUrl = 'https://api-indieteca.onrender.com/';

// Elemento del DOM donde deseas mostrar la información
const listaArtistas = document.getElementById('Array-Api');

// Opciones de la solicitud fetch para manejar CORS
const fetchOptions = {
  method: 'GET',
  mode: 'cors', // Esto indica al navegador que la solicitud es CORS
  headers: {
    'Content-Type': 'application/json',
    // Si necesitas enviar algún encabezado adicional, agrégalo aquí
  }
};

// Llamada a la API usando fetch con las opciones definidas
fetch(apiUrl, fetchOptions)
  .then(response => {
    // Verifica si la respuesta es exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener los datos.');
    }
    // Convierte la respuesta a formato JSON
    return response.json();
  })
  .then(data => {
    // Manipula los datos obtenidos de la API
    // Supongamos que la API devuelve un arreglo de objetos con información sobre artistas
    data.forEach(artist => {
      // Crea un elemento de lista <li> para cada artista y agrega su nombre
      const listItem = document.createElement('li');
      listItem.textContent = artist.name;
      // Agrega el elemento de lista al elemento <ul> en el DOM
      listaArtistas.appendChild(listItem);
    });
  })
  .catch(error => {
    // Captura cualquier error ocurrido durante la llamada a la API
    console.error('Error:', error);
  }); 

const DOMitems = document.querySelector('#items');

function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    // Estructura
    const miNodoMargenTarjetas = document.createElement('div');
    miNodoMargenTarjetas.classList.add('margen-tarjetas');

    // Columnas ROW
    const miNodoRow = document.createElement('div');
    miNodoRow.classList.add('row');

    // Columnas división
    const miNodoColumnas = document.createElement('div');
    miNodoColumnas.classList.add('col-lg-3', 'col-md-5', 'mb-3');

    // Contenedor de la Tarjeta de Artista
    const miNodoTarjetaArtistas = document.createElement('div');
    miNodoTarjetaArtistas.classList.add('card', 'h-100');
    

    // Imagen del perfil del artista
    const miNodoContImg = document.createElement('img');
    miNodoContImg.classList.add('card-img-top');
    miNodoContImg.setAttribute('src', info.imagenPerfil);

    // Link de la imagen
    const miNodoLinkImg = document.createElement('a');
    miNodoLinkImg.setAttribute('href', 'PaginaDeArtistas.html');
    miNodoLinkImg.appendChild(miNodoContImg);

    // Div de card-body
    const miNodoCont = document.createElement('div');
    miNodoCont.classList.add('card-body');

    // Imagen del producto (obra)
    const miNodoArtImg = document.createElement('img');
    // miNodoArtImg.classList.add('bd-placeholder-img', 'rounded-circle');
    miNodoArtImg.setAttribute('src', info.imagenPerfil);

    // Container card
    const miNodoCardBody = document.createElement('div');
    miNodoCardBody.classList.add('Info-artist-card');

    // Nombre del artista (enlace)
    const miNodoCardLink = document.createElement('a');
    miNodoCardLink.classList.add('link-card');
    miNodoCardLink.setAttribute('href', 'PaginaDeArtistas.html');
    
    // Texto del nombre del artista
    const miNodoCardText = document.createElement('h3');
    miNodoCardText.classList.add('card-text');
    miNodoCardText.textContent = `${info.nombre} ${info.primerApellido} ${info.segundoApellido}`;

    // Párrafo con la categoría del artista
    const miNodoCardP = document.createElement('p');
    miNodoCardP.classList.add('card-text');
    miNodoCardP.textContent = `${info.Categoria}`;

    // Construcción de la estructura de nodos
   // miNodoCont.appendChild(miNodoArtImg);
    miNodoCardBody.appendChild(miNodoCont);
    miNodoCardLink.appendChild(miNodoCardText);
    miNodoCardLink.appendChild(miNodoCardP);
    miNodoCardBody.appendChild(miNodoCardLink);
    miNodoTarjetaArtistas.appendChild(miNodoContImg);
    miNodoTarjetaArtistas.appendChild(miNodoCardBody);
    miNodoColumnas.appendChild(miNodoTarjetaArtistas);
    miNodoRow.appendChild(miNodoColumnas);
    miNodoMargenTarjetas.appendChild(miNodoRow);

    // Agregar la tarjeta al contenedor principal
    DOMitems.appendChild(miNodoMargenTarjetas);
  });
}


renderizarProductos();

});