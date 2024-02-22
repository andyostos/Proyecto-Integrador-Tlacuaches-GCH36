




document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
    
    //Artista Pintor
    {
        id: 1,
        nombre: 'Vasili',
        primerApellido: "Kandinski ",
        segundoApellido: "Vasílievich",
        correo:'VasilK@gmail.com',
        ciudad:"Moscú",
        edad:147,
        RFC:"xxxxxxxxxx01",
        Categoria: 'Pintor',
        imagenObra:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        imagenPerfil:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        nickname:'Vasili Kandinski',
    },
    //Artista Escritor
    {
        id: 2,
        nombre: 'Manuel',
        primerApellido: "Altamirano",
        segundoApellido: "Basilio",
        correo:'valtamirano@gmail.com',
        ciudad:"Guerrero",
        edad:190,
        RFC:"89097LLL90OP",
        Categoria: 'Escritor',
        imagenObra:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        imagenPerfil:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        nickname:'AltamiranodeTixtla',
    },
    //Artista1 Músico
        {
            id: 3,
            nombre: 'Piotr',
            primerApellido: "Ilich",
            segundoApellido: "Tchaikovsky",
            correo:'contactoTchaikovsky@gmail.com',
            ciudad:"San Petersburgo, Rusia",
            edad:53,
            RFC:"TCHAIKOVSKY12",
            Categoria: 'Musica',
            imagenObra:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            imagenPerfil:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            nickname:'Chaikoski',
        },
    //Artista Fotógrafo 
        {
            id: 4,
            nombre: 'Alfred',
            primerApellido: "Eisenstaedt",
            segundoApellido: "Eisenstaedt",
            correo:'alfredeisenstaedt@gmail.com',
            ciudad:"Dirschau, Prusia Occidental ",
            edad:53,
            RFC:"18981995ALEI",
            Categoria: 'Fotografía',
            imagenObra:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            imagenPerfil:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            nickname:'Alfred Photo',
        },
    
        //Artista Escultor 
        {
            id: 5,
            nombre: 'Miguel Ángel',
            primerApellido: "Ángel",
            segundoApellido: "Buonarroti",
            correo:'contacto.MiguelAngel@gmail.com',
            ciudad:"Florencia, Italia",
            edad:83,
            RFC:"MANGEL88",
            Categoria: 'Escultura',
            imagenObra:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            imagenPerfil:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            nickname:'MiguelAngelo',
        }
    ]















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
    miNodoLinkImg.setAttribute('href', '7.PaginaDeArtistas.html');
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
    miNodoCardLink.setAttribute('href', '7.PaginaDeArtistas.html');
    
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