var listaVendedores = [];

function addVendedortoSystem(pnombre, papellidopaterno, papellidomaterno, pusuario, prfc, pbirthday, pciudad, pemail, ppassword){

    var newVendedor = {
        nombre : pnombre,
        apellidopaterno : papellidopaterno,
        apellidomaterno : papellidomaterno,
        usuario : pusuario,
        rfc : prfc,
        birthday : pbirthday,
        ciudad : pciudad,
        email : pemail,
        password : ppassword,

    };
    console.log(newVendedor)
    listaVendedores.push(newVendedor);
    localStorageList(listaVendedores);
    
}




function localStorageList(plist){
    localStorage.setItem("localStorageVendorList", JSON.stringify(plist));

   

}

