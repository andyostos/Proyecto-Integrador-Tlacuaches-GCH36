/*Cambiar los productos por los artistas */
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
        nombreDeProducto: 'Taza navidad en las montañas',
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
        imagenDeProducto:'https://cbsnews3.cbsistatic.com/hub/i/r/2016/05/03/9ab74164-e9ab-43d1-a245-def44dbe33be/thumbnail/1240x1472/0b84765f598f135b8cd5b379aabde832/alfred-eisentstaedt-vj-day-in-times-square.jpg',
        existencia: 1,
        categoria: 'Fotografía',
        tipo:'Realismo',
        descripcion: 'En la imagen, un marinero desconocido agarra y besa apasionadamente a una joven mujer vestida de blanco, mientras la multitud que los rodea irradia una energía palpable de júbilo y liberación.' 
    },
    
    {
        id: 10,
        nombreDeProducto: 'Sticker de El Beso',
        precio: 1200,
        imagenDeProducto:'https://i.pinimg.com/736x/81/75/71/81757110d49ef76fcf50136af7605dbf.jpg',
        existencia: 1,
        categoria: 'Mercancia',
        tipo:'urbano',
        descripcion: 'Este sticker captura el icónico momento de la fotografía "El Beso" tomada por Alfred Eisenstaedt',
    }
    
    ]
    
    
    
    //esto tiene que ir conectado a las paginas
    
    let carrito = [];
    const divisa = '$mxn';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    
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
         miNodoDivision.classList.add('col-lg-3', 'col-md-6', 'mb-3');
        // Contenedero de la Tarjeta de Producto
        const miNodoTarjetaProduct = document.createElement('div');
        miNodoTarjetaProduct.classList.add('card', 'text', 'text-white', 'custom-card', 'margen-card-carrito');
        //Contenedor Imagenes
        const miNodoContImg = document.createElement('div');
        miNodoContImg.classList.add('image-container');
        //Link de la imagen
        const miNodoLinkImg = document.createElement('a');
        miNodoLinkImg.setAttribute('href', 'PaginaDeProducto.html');
        //Imagen del producto
        const miNodoProducImg = document.createElement('img');
        miNodoProducImg.classList.add('card-img-top');
        miNodoProducImg.setAttribute('src', `${info.imagenPerfil}`);
        miNodoProducImg.setAttribute('width','50');
        miNodoProducImg.setAttribute('height','50');
        // Container card
        const miNodoCardBody = document.createElement('div');
        miNodoContImg.classList.add('card-body');
        //Nombre Producto 
        const miNodoCardTitle = document.createElement('h5');
        miNodoCardTitle.classList.add('card-title');
        miNodoCardTitle.textContent = `${info.nombreDeProducto}`;
        
        //Precio
        const miNodoPrecios = document.createElement('h4');
        miNodoPrecios.classList.add('mx-2');
        miNodoPrecios.textContent = `${info.precio}${divisa}`

        //Carrito Icono
        // const miNodoIconoCar = document.createElement('i');
        // miNodoPrecios.classList.add('bi', 'bi-cart-fill', 'img-color-icon');

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
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-color-carrito');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        
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
        miNodoPrecios.appendChild(miNodoBoton);

        DOMitems.appendChild(miNodoTarjetaProduct);
    });
} 

//hasta aqui tiene que ir lo de los productos en una página.




    function anyadirProductoAlCarrito(evento) {
        // Añade carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualiza el carrito
        renderizarCarrito();
    
    }
    
    /**
     * Dibuja todos los productos 
     */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
       
        const carritoSinDuplicados = [...new Set(carrito)];
        // Genera Nodos
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
             
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // Incremento el contador
                return itemId === item ? total += 1 : total;
            }, 0);
            //  item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5','btn-primary-carrito');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezcla
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderiza
        DOMtotal.textContent = calcularTotal();
    }
    
    /**
     *borrarcosas
     */
    function borrarItemCarrito(evento) {
        // id
        const id = evento.target.dataset.item;
        // Borra
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        //  renderizar
        renderizarCarrito();
    }
    
    /**
     * Calcula el precio total 
     */
    function calcularTotal() {
        //  array del carrito
        return carrito.reduce((total, item) => {
            // obten su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // suma
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
    
    
    
    
    
    
    function vaciarCarrito() {
       
        carrito = [];
      
        renderizarCarrito();
    }
    
    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    
    
    renderizarProductos();
    renderizarCarrito();
    