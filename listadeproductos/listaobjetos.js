document.querySelector('#btnGuardar').addEventListener('click', guardarProducto);

function guardarProducto() {
    var sNombre = document.querySelector("#txtNombre").value,
        sCategoria = document.querySelector("#txtCategoria").value,
        sPrecio = document.querySelector("#txtPrecio").value,
        sDescripcion = document.querySelector("#txtDescripcion").value,
        sVendedor = document.querySelector("#txtVendedor").value;

    addProductToSystem(sNombre, sCategoria, sPrecio, sDescripcion, sVendedor);
};
