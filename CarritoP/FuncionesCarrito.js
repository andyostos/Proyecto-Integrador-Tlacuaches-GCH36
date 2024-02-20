
const baseDeDatos = [

    {
        id: 1,
        nombre: 'Composición X',
        precio: 100,
        imagen: './st',
        Existencia: 'TRUE',
        Categoria: 'Pintura',
        Descripción: 'Composición X es una pintura al óleo abstracta creada en 1939 por el artista emigrado ruso Wassily Kandinsky, que entonces vivía cerca de París. Forma parte de la colección del Kunstsammlung Nordrhein-Westfalen en Düsseldorf, Alemania.',
        Imagen: 'https://kuadros.com/cdn/shop/files/pintura-Composicion-X-KUADROS-2.jpg?v=1683784857&width=2078'
    },
    
    
    {
        id: 2,
        nombre: 'Playera Composición VIII',
        precio: 200,
        imagen: './st',
        Existencia: 'FALSE',
        Categoria: 'Mercancía',
        Descripción:  'Obra maestra clásica de bellas artes de Vassily Kandinsky en playera unitalla. La Composición VIII de Vassily Kandinsky es una de las obras de arte más famosas de todos los tiempos.',
    },
    
    
    {
        id: 3,
        nombre: 'Composición X',
        precio: 100,
        imagen: './st',
        Existencia: 'TRUE',
        Categoria: 'Pintura',
        Descripción: 'Composición X es una pintura al óleo abstracta creada en 1939 por el artista emigrado ruso Wassily Kandinsky, que entonces vivía cerca de París. Forma parte de la colección del Kunstsammlung Nordrhein-Westfalen en Düsseldorf, Alemania.',
        Imagen: 'https://kuadros.com/cdn/shop/files/pintura-Composicion-X-KUADROS-2.jpg?v=1683784857&width=2078'
    },
    
    
    {
        id: 4,
        nombre: 'Playera Composición VIII',
        precio: 200,
        imagen: './st',
        Existencia: 'FALSE',
        Categoria: 'Mercancía',
        Descripción:  'Obra maestra clásica de bellas artes de Vassily Kandinsky en playera unitalla. La Composición VIII de Vassily Kandinsky es una de las obras de arte más famosas de todos los tiempos.',
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
     * Esto es la renderización o sea todos lo sproductos.  No confundir con el carrito
     */
    function renderizarProductos() {
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
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
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
    