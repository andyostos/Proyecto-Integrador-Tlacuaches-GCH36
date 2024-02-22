var catalogo = [];

function addProductToSystem(pnombre, pcategoria, pprecio, pdescripcion, pvendedor){
    var nuevoProducto = {
        
        nombre : pnombre,

        categoria : pcategoria,
        
        precio : pprecio,
        
        descripcion : pdescripcion,

        vendedor : pvendedor,
    };
    console.log(catalogo);
    catalogo.push(nuevoProducto);

}
   
