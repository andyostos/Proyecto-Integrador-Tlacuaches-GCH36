
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
        imagenPerfil:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
        nickname:'Chaikoski',
    },
//Artista Fotógrafo 
    {
        id: 4,
        nombre: 'Alfred',
        primerApellido: "Eisenstaedt",
        segundoApellido: "",
        correo:'alfredeisenstaedt@gmail.com',
        ciudad:"Dirschau, Prusia Occidental ",
        edad:53,
        RFC:"18981995ALEI",
        Categoria: 'Fotografía',
        imagenPerfil:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
        nickname:'Alfred Photo',
    },

    //Artista Escultor 
    {
        id: 5,
        nombre: 'Miguel Ángel',
        primerApellido: "",
        segundoApellido: "Buonarroti",
        correo:'contacto.MiguelAngel@gmail.com',
        ciudad:"Florencia, Italia",
        edad:83,
        RFC:"MANGEL88",
        Categoria: 'Escultura',
        imagenPerfil:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
        nickname:'MiguelAngelo',
    }
]
/*
    ///////////////////////////////////////////////////////
    
    {
        id: 2,
        nombre: 'Playera Composición VIII',
        precio: 200,
        imagen: 'https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C91n24sFL0IL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
        Existencia: 'FALSE',
        Categoria: 'Mercancía',
        Descripción:  'Obra maestra clásica de bellas artes de Vassily Kandinsky en playera unitalla. La Composición VIII de Vassily Kandinsky es una de las obras de arte más famosas de todos los tiempos.',
    }
    
    //Manuel Altamirano
    {
        id: 3,
        nombre: 'Manuel',
        primerApellido: 'Altamiran',
        segundoApellido: 'Basilio',
        Correo:'valtamirano@gmail.com',
        Ciudad: 'Guerrero',
        Edad: '190',
        RFC: '89097LLL90OP',
        Categoria: 'Escritor',
        imagenPerfil: 'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        NombreUsuario: 'AltamiranodeTixtla',    
    },
    
    /*
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

        id: 3,
        nombre: 'Manuel',
        primerApellido: 'Altamiran',
        segundoApellido: 'Basilio',
        Correo:'valtamirano@gmail.com',
        Ciudad: 'Guerrero',
        Edad: '190',
        RFC: '89097LLL90OP',
        Categoria: 'Escritor',
        imagenPerfil: 'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        NombreUsuario: 'AltamiranodeTixtla',    
        
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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFECJc3BvOjwqOuG5Ip2FarEQoqiZskEof9w&usqp=CAU',
        Existencia: 'TRUE',
        Categoria: 'Escultura',
        Descripción: 'Es una famosa escultura realizada por Miguel Angel durante el Renacimiento. La obra representa al héroe bíblico David, quien derrotó al gigante Goliat.'
    },

    {
        id: 8,
        nombre: 'La piedad',
        precio: 500,
        imagen:'https://cdn.culturagenial.com/es/imagenes/michelangelo-s-pieta-5450-cut-out-black-cke.jpg',
        Existencia: 'TRUE',
        Categoria: 'Escultura',
        Descripcion:'Es una de las obras maestras del escultor renacentista Miguel Angel. Esculpida en mármol entre 1498 y 1499.'
    },

    // Alfred Eisenstaedt
    {
        id: 9,
        nombre: 'El beso',
        precio: 2000,
        imagen:'https://cbsnews3.cbsistatic.com/hub/i/r/2016/05/03/9ab74164-e9ab-43d1-a245-def44dbe33be/thumbnail/1240x1472/0b84765f598f135b8cd5b379aabde832/alfred-eisentstaedt-vj-day-in-times-square.jpg',
        Existencia: 'TRUE',
        Categoria: 'Fotografia',
        Descripcion: 'En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.' 
    },
    
    {
        id: 10,
        nombre: 'El beso',
        precio: 1200,
        imagen:'https://www.canva.com/design/DAF9XAmG1b0/UBYn83uoYy5gu6V8FktCJA/edit?utm_content=DAF9XAmG1b0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        Existencia: 'TRUE',
        Categoria: 'Mercancia',
        Descripcion: ' En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.'
    }
    
    ]
    
    */
    
    //esto tiene que ir conectado a las paginas
    
    // let carrito = [];
    // const divisa = '$mxn';
    // const DOMitems = document.querySelector('#items');
    // const DOMcarrito = document.querySelector('#carrito');
    // const DOMtotal = document.querySelector('#total');
    // const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    
    // Funciones
    
    /**
     * Esto es la renderización o sea todos los productos.  No confundir con el carrito
     */
    /**function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Inserta
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
    */

   // Creacion Tarjeta tipo Indieteca
   function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodoTarjeta = document.createElement('div');
        miNodoTarjeta.classList.add('tarjetas');
        // Columnas ROW
        const miNodoRow = document.createElement('div');
        miNodoRow.classList.add('row');
        //Columnas division
        const miNodoDivision = document.createElement('div');
         miNodoDivision.classList.add('rcol-lg-3', 'col-md-6', 'mb-3');
        // Contenedero de la Tarjeta de Producto
        const miNodoTarjetaProduct = document.createElement('div');
        miNodoTarjetaProduct.classList.add('card', 'text', 'bg-black', 'text-white', 'custom-card');
        //Contenedor Imagenes
        const miNodoContImg = document.createElement('div');
        miNodoContImg.classList.add('image-container');
        //Link de la imagen
        const miNodoLinkImg = document.createElement('a');
        miNodoLinkImg.setAttribute('href', '8PaginaDeProducto.html');
        //Imagen del producto
        const miNodoProducImg = document.createElement('img');
        miNodoProducImg.classList.add('card-img-top');
        miNodoProducImg.setAttribute('src', `${info.imagen}`);
        miNodoProducImg.setAttribute('width','50');
        miNodoProducImg.setAttribute('height','50');
        // Container card
        const miNodoCardBody = document.createElement('div');
        miNodoContImg.classList.add('card-body');
        //Nombre Producto 
        const miNodoCardTitle = document.createElement('h5');
        miNodoCardTitle.classList.add('card-title');
        miNodoCardTitle.textContent = `${info.nombre}`;
        
        //Precio
        const miNodoPrecios = document.createElement('h4');
        miNodoPrecios.classList.add('mx-2');
        miNodoPrecios.textContent = `${info.precio}${divisa}`

        //Carrito Icono

        // Titulo

        // const miNodoTitle = document.createElement('h5');
        // miNodoTitle.classList.add('card-title');
        // miNodoTitle.textContent = info.nombre;
        // // Imagen
        // const miNodoImagen = document.createElement('img');
        // miNodoImagen.classList.add('img-fluid');
        // miNodoImagen.setAttribute('src', info.imagen);
        // // Precio
        // const miNodoPrecio = document.createElement('p');
        // miNodoPrecio.classList.add('card-text');
        // miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton
        // const miNodoBoton = document.createElement('button');
        // miNodoBoton.classList.add('btn', 'btn-primary');
        // miNodoBoton.textContent = '+';
        // miNodoBoton.setAttribute('marcador', info.id);
        // miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        
        // // Inserta
        // miNodoCardBody.appendChild(miNodoImagen);
        // miNodoCardBody.appendChild(miNodoTitle);
        // miNodoCardBody.appendChild(miNodoPrecio);
        // miNodoCardBody.appendChild(miNodoBoton);
        // miNodoDivision.appendChild(miNodoPrecio);
        // miNodo.appendChild(miNodoCardBody);

        




        miNodoTarjeta.appendChild(miNodoRow);
        miNodoRow.appendChild(miNodoDivision);
        miNodoDivision.appendChild(miNodoTarjetaProduct);
        miNodoTarjetaProduct.appendChild(miNodoContImg);
        miNodoTarjetaProduct.appendChild(miNodoCardBody);
        miNodoContImg.appendChild(miNodoLinkImg);
        miNodoContImg.appendChild(miNodoProducImg);
        miNodoCardBody.appendChild(miNodoCardTitle);
        miNodoCardBody.appendChild(miNodoPrecios);

        DOMitems.appendChild(miNodoTarjetaProduct);
    });
} 