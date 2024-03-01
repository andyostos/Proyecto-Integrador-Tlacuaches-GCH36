
document.addEventListener('DOMContentLoaded', () => {

const baseDeDatos = [
    //Kandinski 
    {
        id: 1,
        nombreDeProducto: 'Composición X',
        precio: 100,
        existencia: 1,
        categoria: 'Pintura',
        tipo: 'Abstracción',
        descripcion: 'Composición X es una pintura al óleo abstracta creada en 1939 por el artista emigrado ruso Wassily Kandinsky, que entonces vivía cerca de París. Forma parte de la colección del Kunstsammlung Nordrhein-Westfalen en Düsseldorf, Alemania.',
        imagenProducto: 'https://kuadros.com/cdn/shop/files/pintura-Composicion-X-KUADROS-2.jpg?v=1683784857&width=2078'
    },
    
    
    {
        id: 2,
        nombreDeProducto: 'Playera Composición VIII',
        precio: 200,
        existencia: 5,
        categoria: 'Mercancia',
        tipo: 'Ropa',
        descripcion:  'Obra maestra clásica de bellas artes de Vassily Kandinsky en playera unitalla. La Composición VIII de Vassily Kandinsky es una de las obras de arte más famosas de todos los tiempos.',
        imagenProducto: 'https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C91n24sFL0IL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
        
    },
    
    //Manuel Altamirano
    {
        id: 3,
        nombreDeProducto: 'El Zarco',
        precio: 800,
        existencia: 3,
        categoria: 'Escritura',
        tipo: 'Novela',
        descripcion: 'Una obra clásica escrita aproximadamente entre el año 1884 a 1886, está ambientada en el Estado de Morelos y sigue la historia de Manuela, Pilar, Nicolás y el bandido a quién apodan el Zarco. Esta obra hace referencia al final de La Guerra de Reforma y el reclutamiento de bandidos por el movimiento juarista. ',
        imagenProducto: 'https://bibliotecaresumen.com/wp-content/uploads/Resumen-de-El-Zarco-Enterate-aqui-de-lo-que-necesitas-saber.jpg'
    },
    
    
    {
        id: 4,
        nombreDeProducto: 'Taza navidad',
        precio: 200,
        existencia: 3,
        categoria: 'Mercancía',
        tipo: 'Taza',
        descripcion:  'Obra inspirada en el clásico libro de Navidad en las Montañas. La obra es una de las más conocidas del autor ideal para Navidad pues la historia trata de un clérigo que conoce el verdadero significado de esta festividad. ',
        imagenProducto: 'https://marketplace.canva.com/print-mockup/bundle/E2C1MVoPF2T/surface:marketplace/surface:marketplace/EAEoQHnB8Xs/1/0/1600w/canva-verde-monta%C3%B1as-moderno-minimalista-taza-de-viaje-R0M8AZ7TYyA.jpg?sig=750389a8b4ec90c229f39d7a53b0240b&width=800',
    },
    
    //Tchaikovsky
    {
        id: 5,
        nombreDeLProducto: 'El lago de los Cisnes',
        precio: 1000,
        existencia: 1,
        categoria: 'Musica',
        tipo:'clasica',
        descripcion:  'Obra original compuesta por el extraordinario músico Tchaikovsky, entre los años 1875 y 1876 Tan solo un año después, en 1877, se estrenaría bajo el escenario del famoso Teatro Bolshói de Moscú.',
        imagenProducto: 'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
    },
    
    {
        id: 6,
        nombreDelProducto: 'El Cascanueces',
        precio: 1200,
        existencia: 1,
        categoria: 'Musica',
        tipo: 'clasica',
        descripcion:  'Obra original compuesta por el extraordinario músico Tchaikovsky en 1890, por encargo de Vsevolozhsky para formar parte de la composición de un programa doble con una ópera y un ballet.',
        imagenProducto: 'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
    },

    //Miguel Angel
    {
        id: 7,
        nombreDeProducto: 'El David',
        precio: 900,
        existencia: 1,
        categoria: 'Escultura',
        tipo: 'Realismo',
        descripción: 'Es una famosa escultura realizada por Miguel Angel durante el Renacimiento. La obra representa al héroe bíblico David, quien derrotó al gigante Goliat.',
        imagenProducto: 'https://historia.nationalgeographic.com.es/medio/2023/11/20/david-by-michelangelo-jbu05_9c2f9829_231120154233_550x825.jpg',
   
    },

    {
        id: 8,
        nombreDeProducto: 'La Piedad',
        precio: 500,
        existencia: 2,
        categoria: 'Escultura',
        tipo: 'Realismo',
        descripcion:'Es una de las obras maestras del escultor renacentista Miguel Angel. Esculpida en mármol entre 1498 y 1499.',
        imagenProducto:'https://cdn.culturagenial.com/es/imagenes/michelangelo-s-pieta-5450-cut-out-black-cke.jpg',
    },

    // Alfred Eisenstaedt
    {
        id: 9,
        nombreDeProducto: 'El Beso',
        precio: 2000,
        existencia: 1,
        categoria: 'Fotografía',
        tipo:'Realismo',
        descripcion: 'En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.', 
        imagenProducto:'https://cbsnews3.cbsistatic.com/hub/i/r/2016/05/03/9ab74164-e9ab-43d1-a245-def44dbe33be/thumbnail/1240x1472/0b84765f598f135b8cd5b379aabde832/alfred-eisentstaedt-vj-day-in-times-square.jpg',
    },
    
    {
        id: 10,
        nombreDeProducto: 'Sticker de El Beso',
        precio: 1200,
        existencia: 1,
        categoria: 'Mercancia',
        tipo:'urbano',
        descripcion: 'Este sticker captura el icónico momento de la fotografía "El Beso" tomada por Alfred Eisenstaedt',
        imagenProducto:'https://i.pinimg.com/736x/81/75/71/81757110d49ef76fcf50136af7605dbf.jpg',
    }
    
    ]
    


    const nombreProductoElement = document.getElementById('album-1');
    const nProducto1 = baseDeDatos.find(objeto => objeto.id === 1);
    if (nProducto1) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement.textContent = nProducto1.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }



    const imagenProductoElement = document.getElementById('imagen-1');
    const nImagen1 = baseDeDatos.find(objeto => objeto.id === 1);
    
    if (nImagen1) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement.src = nImagen1.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }



    const precioProducto1Element = document.getElementById('precio-1');
    const nPrecio1 = baseDeDatos.find(objeto => objeto.id === 1);
    if (nPrecio1) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProducto1Element.textContent = `$${nPrecio1.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const iconoProducto1Element = document.getElementById('icono-1');
    const nIcono1 = baseDeDatos.find(objeto => objeto.id === 1);
    if (nIcono1) {
        // Mostrar el nombre del artista en el elemento HTML
        iconoProducto1Element.href = "PaginaDeProducto.html";
    } else {
        console.log('Precio no encontrado');
    }



    const nombreProductoElement2 = document.getElementById('album-2');
    const nProducto2 = baseDeDatos.find(objeto => objeto.id === 2);
    if (nProducto2) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement2.textContent = nProducto2.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }


    const imagenProductoElement2 = document.getElementById('imagen-2');
    const nImagen2 = baseDeDatos.find(objeto => objeto.id === 2);
    
    if (nImagen2) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement2.src = nImagen2.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }


    const precioProductoElement2 = document.getElementById('precio-2');
    const nPrecio2 = baseDeDatos.find(objeto => objeto.id === 2);
    if (nPrecio2) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement2.textContent = `$${nPrecio2.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const nombreProductoElement3 = document.getElementById('album-3');
    const nProducto3 = baseDeDatos.find(objeto => objeto.id === 3);
    if (nProducto3) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement3.textContent = nProducto3.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement3 = document.getElementById('imagen-3');
    const nImagen3 = baseDeDatos.find(objeto => objeto.id === 3);
    
    if (nImagen3) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement3.src = nImagen3.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement3 = document.getElementById('precio-3');
    const nPrecio3 = baseDeDatos.find(objeto => objeto.id === 3);
    if (nPrecio3) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement3.textContent =`$${nPrecio3.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const nombreProductoElement4 = document.getElementById('album-4');
    const nProducto4 = baseDeDatos.find(objeto => objeto.id === 4);
    if (nProducto4) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement4.textContent = nProducto4.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement4 = document.getElementById('imagen-4');
    const nImagen4 = baseDeDatos.find(objeto => objeto.id === 4);
    
    if (nImagen4) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement4.src = nImagen4.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement4 = document.getElementById('precio-4');
    const nPrecio4 = baseDeDatos.find(objeto => objeto.id === 4);
    if (nPrecio4) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement4.textContent = `$${nPrecio4.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const nombreProductoElement5 = document.getElementById('album-5');
    const nProducto5 = baseDeDatos.find(objeto => objeto.id === 5);
    if (nProducto5) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement5.textContent = nProducto5.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement5 = document.getElementById('imagen-5');
    const nImagen5 = baseDeDatos.find(objeto => objeto.id === 5);
    
    if (nImagen5) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement5.src = nImagen5.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement5 = document.getElementById('precio-5');
    const nPrecio5 = baseDeDatos.find(objeto => objeto.id === 5);
    if (nPrecio5) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement5.textContent = `$${nPrecio5.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const nombreProductoElement6 = document.getElementById('album-6');
    const nProducto6 = baseDeDatos.find(objeto => objeto.id === 6);
    if (nProducto6) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement6.textContent = nProducto6.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement6 = document.getElementById('imagen-6');
    const nImagen6 = baseDeDatos.find(objeto => objeto.id === 6);
    
    if (nImagen6) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement6.src = nImagen6.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement6 = document.getElementById('precio-6');
    const nPrecio6 = baseDeDatos.find(objeto => objeto.id === 6);
    if (nPrecio6) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement6.textContent = `$${nPrecio6.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }



    const nombreProductoElement7 = document.getElementById('album-7');
    const nProducto7 = baseDeDatos.find(objeto => objeto.id === 7);
    if (nProducto7) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement7.textContent = nProducto7.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement7 = document.getElementById('imagen-7');
    const nImagen7 = baseDeDatos.find(objeto => objeto.id === 7);
    
    if (nImagen6) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement7.src = nImagen7.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement7 = document.getElementById('precio-7');
    const nPrecio7 = baseDeDatos.find(objeto => objeto.id === 7);
    if (nPrecio7) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement7.textContent = `$${nPrecio7.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


    const nombreProductoElement8 = document.getElementById('album-8');
    const nProducto8 = baseDeDatos.find(objeto => objeto.id === 8);
    if (nProducto8) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreProductoElement8.textContent = nProducto8.nombreDeProducto;
    } else {
        console.log('Artista no encontrado');
    }

    const imagenProductoElement8 = document.getElementById('imagen-8');
    const nImagen8 = baseDeDatos.find(objeto => objeto.id === 8);
    
    if (nImagen8) {
        // Mostrar la imagen del producto en el elemento HTML
        imagenProductoElement8.src = nImagen8.imagenProducto; 
    } else {
        console.log('Producto no encontrado');
    }

    const precioProductoElement8 = document.getElementById('precio-8');
    const nPrecio8 = baseDeDatos.find(objeto => objeto.id === 8);
    if (nPrecio8) {
        // Mostrar el nombre del artista en el elemento HTML
        precioProductoElement8.textContent = `$${nPrecio8.precio}MXN`;
    } else {
        console.log('Precio no encontrado');
    }


});