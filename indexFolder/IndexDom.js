document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
       //Kandinski 
    {
        id: 1,
        nombre: 'Composición X',
        precio: 100,
        Existencia: 'TRUE',
        Categoria: 'Pintura',
        Tipo: 'Abstracción',
        Descripción: 'Composición X es una pintura al óleo abstracta creada en 1939 por el artista emigrado ruso Wassily Kandinsky, que entonces vivía cerca de París. Forma parte de la colección del Kunstsammlung Nordrhein-Westfalen en Düsseldorf, Alemania.',
        imagen: 'https://kuadros.com/cdn/shop/files/pintura-Composicion-X-KUADROS-2.jpg?v=1683784857&width=2078',
        artista: 'Vasili Kandinski',
        producto:'https://kuadros.com/cdn/shop/files/pintura-Composicion-X-KUADROS-2.jpg?v=1683784857&width=2078'
    },
    
    
    {
        id: 2,
        nombre: 'Playera Composición VIII',
        precio: 200,
        imagen: 'https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C91n24sFL0IL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
        Existencia: 'FALSE',
        Categoria: 'Mercancía',
        Descripción:  'Obra maestra clásica de bellas artes de Vassily Kandinsky en playera unitalla. La Composición VIII de Vassily Kandinsky es una de las obras de arte más famosas de todos los tiempos.',
    },
    
    //Manuel Altamirano
    {
        id: 3,
        nombre: 'El Zarco',
        precio: 800,
        Existencia: 'TRUE',
        Categoria: 'Libro',
        Tipo: 'Novela',
        Descripción: 'Una obra clásica escrita aproximadamente entre el año 1884 a 1886, está ambientada en el Estado de Morelos y sigue la historia de Manuela, Pilar, Nicolás y el bandido a quién apodan el Zarco. Esta obra hace referencia al final de La Guerra de Reforma y el reclutamiento de bandidos por el movimiento juarista. ',
        imagen: 'https://bibliotecaresumen.com/wp-content/uploads/Resumen-de-El-Zarco-Enterate-aqui-de-lo-que-necesitas-saber.jpg',
        producto: 'https://bibliotecaresumen.com/wp-content/uploads/Resumen-de-El-Zarco-Enterate-aqui-de-lo-que-necesitas-saber.jpg'
    },
    
    
    {
        id: 4,
        nombre: 'taza navidad en las montañas',
        precio: 200,
        imagen: 'https://marketplace.canva.com/print-mockup/bundle/E2C1MVoPF2T/surface:marketplace/surface:marketplace/EAEoQHnB8Xs/1/0/1600w/canva-verde-monta%C3%B1as-moderno-minimalista-taza-de-viaje-R0M8AZ7TYyA.jpg?sig=750389a8b4ec90c229f39d7a53b0240b&width=800',
        Existencia: 'FALSE',
        Categoria: 'Mercancía',
        Tipo: 'Taza',
        Descripción:  'Obra inspirada en el clásico libro de Navidad en las Montañas. La obra es una de las más conocidas del autor ideal para Navidad pues la historia trata de un clérigo que conoce el verdadero significado de esta festividad. ',
    },
    
    //Tchaikovsky
    {
        id: 5,
        nombre: 'El lago de los Cisnes',
        precio: 1000,
        imagen: 'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
        Existencia: 'TRUE',
        Categoria: 'Música',
        Descripción:  'Obra original compuesta por el extraordinario músico Tchaikovsky, entre los años 1875 y 1876 Tan solo un año después, en 1877, se estrenaría bajo el escenario del famoso Teatro Bolshói de Moscú.',
        producto: 'https://musescore.com/static/musescore/scoredata/g/3f8e79b4ea390409e625a1c6580563b5dab5af8a/score_0.png?no-cache=1579603638'
    },
    
    {
        id: 6,
        nombre: 'El Cascanueces',
        precio: 1200,
        imagen: 'st',
        Existencia: 'TRUE',
        Categoria: 'Música',
        Descripción:  'Obra original compuesta por el extraordinario músico Tchaikovsky en 1890, por encargo de Vsevolozhsky para formar parte de la composición de un programa doble con una ópera y un ballet.',
    },

    //Miguel Angel
    {
        id: 7,
        nombre: 'El David',
        precio: 900,
        imagen: '',
        Existencia: 'TRUE',
        Categoria: 'Escultura',
        Descripción: 'Es una famosa escultura realizada por Miguel Angel durante el Renacimiento. La obra representa al héroe bíblico David, quien derrotó al gigante Goliat.'
    },

    {
        id: 8,
        nombre: 'La piedad',
        precio: 500,
        imagen:'',
        Existencia: 'TRUE',
        Categoria: 'Escultura',
        Descripcion:'Es una de las obras maestras del escultor renacentista Miguel Angel. Esculpida en mármol entre 1498 y 1499.',
        producto:'https://cdn.culturagenial.com/es/imagenes/michelangelo-s-pieta-5450-cut-out-black-cke.jpg%7D'
    },

    // Alfred Eisenstaedt
    {
        id: 9,
        nombre: 'El beso',
        precio: 2000,
        imagen:'https://cbsnews3.cbsistatic.com/hub/i/r/2016/05/03/9ab74164-e9ab-43d1-a245-def44dbe33be/thumbnail/1240x1472/0b84765f598f135b8cd5b379aabde832/alfred-eisentstaedt-vj-day-in-times-square.jpg',
        Existencia: 'TRUE',
        Categoria: 'Fotografia',
        Descripcion: 'En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.', 
        producto:'https://cbsnews3.cbsistatic.com/hub/i/r/2016/05/03/9ab74164-e9ab-43d1-a245-def44dbe33be/thumbnail/1240x1472/0b84765f598f135b8cd5b379aabde832/alfred-eisentstaedt-vj-day-in-times-square.jpg'
    },
    
    {
        id: 10,
        nombre: 'El beso',
        precio: 1200,
        imagen:'https://www.canva.com/design/DAF9XAmG1b0/UBYn83uoYy5gu6V8FktCJA/edit?utm_content=DAF9XAmG1b0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        Existencia: 'TRUE',
        Categoria: 'Mercancia',
        Descripcion: ' En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.',
       
    }
    
    ]
   

    //////////////
    //NombreProducto
    // Obtener referencia al elemento HTML
    const nombreProductoElement = document.getElementById('img-1');

    // Buscar el objeto con id=1 (Vasili)
    const nProducto = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nProducto) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement.src = nProducto.producto;
    } else {
        console.log('Artista no encontrado');
    }

    //////////////////////////////////////////////////////////
    //Tipo
    // Obtener referencia al elemento HTML
    const nombreTipoElement = document.getElementById('tipo-tec');

    // Buscar el objeto con id=1 (Vasili)
    const tipoTec = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (tipoTec) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreTipoElement.textContent = tipoTec.Tipo;
    } else {
        console.log('Artista no encontrado');
    }

    //////////////////////////////////////////////////////////
    //Nombre Artista
    // Obtener referencia al elemento HTML
    const nombreArtistaElement = document.getElementById('nombre-artista');

    // Buscar el objeto con id=1 (Vasili)
    const nArtista = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nArtista) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreArtistaElement.textContent = nArtista.artista;
    } else {
        console.log('Artista no encontrado');
    }
    
    //////////////////////////////////////////////////////////
    //PRECIO
    // Obtener referencia al elemento HTML
    const numeroPrecioElement = document.getElementById('numero-precio');

    // Buscar el objeto con id=1 (Vasili)
    const nPrecio = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nPrecio) {
        // Mostrar el nombre del artista en el elemento HTML
        numeroPrecioElement.textContent = `$${nPrecio.precio}MXN`; 
    } else {
        console.log('Artista no encontrado');
    }

    //PRECIO
    // Obtener referencia al elemento HTML
    const descripcionObraElement = document.getElementById('descripcion-obra');

    // Buscar el objeto con id=1 (Vasili)
    const dObra = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (dObra) {
        // Mostrar el nombre del artista en el elemento HTML
        descripcionObraElement.textContent = dObra.Descripción; 
    } else {
        console.log('Artista no encontrado');
    }
    //////////////////////////////////////////////////////////
    //Imagen
        // Obtén una referencia al elemento de imagen por su ID
        const imagenElement = document.getElementById('imagen-prod-db');

        // Busca el objeto con id=1 (Vasili)
        const eImagen = baseDeDatos.find(objeto => objeto.id === 1);
    
        // Verifica si se encontró el artista
        if (eImagen) {
            // Cambia la fuente de la imagen por la del artista
            imagenElement.img = eImagen.imagen;
        } else {
            console.log('Artista no encontrado');
        }
});

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