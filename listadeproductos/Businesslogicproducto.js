var catalogo = [];

function addProduct(pnombre, pcategoria, pprecio, pdescripcion, pvendedor){
    var nuevoProducto = {
        
        nombre : pnombre,

        categoria : pcategoria,
        
        precio : pprecio,
        
        descripcion : pdescripcion,

        vendedor : pvendedor,
    };

    catalogo.push(nuevoProducto);

}
   
