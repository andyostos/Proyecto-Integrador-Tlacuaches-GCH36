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
        artista: 'Vasili Kandinski'
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
        imagen: 'https://bibliotecaresumen.com/wp-content/uploads/Resumen-de-El-Zarco-Enterate-aqui-de-lo-que-necesitas-saber.jpg'
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
    //NombreProducto
    // Obtener referencia al elemento HTML
    const nombreProductoElement = document.getElementById('nombre-obra');

    // Buscar el objeto con id=1 (Vasili)
    const nProducto = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nProducto) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement.textContent = nProducto.nombre;
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
            imagenElement.src = eImagen.imagen;
        } else {
            console.log('Artista no encontrado');
        }

    
});