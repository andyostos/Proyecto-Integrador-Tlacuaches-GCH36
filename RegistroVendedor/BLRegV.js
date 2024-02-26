var listaVendedores = [];

function addVendedortoSystem(pnombre, papellidopaterno, papellidomaterno, pusuario, prfc, pbirthday, pciudad, ptipo, pemail, ppassword){

    var newVendedor = {
        nombre : pnombre,
        apellidopaterno : papellidopaterno,
        apellidomaterno : papellidomaterno,
        usuario : pusuario,
        rfc : prfc,
        birthday : pbirthday,
        ciudad : pciudad,
        tipo : ptipo, 
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

