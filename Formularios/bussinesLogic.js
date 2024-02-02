var listaUsuarios = [];

function addUsertoSystem(pnombre, papellidopaterno, papellidomaterno, pusername, pbirthday, pemail, ppassword){

    var newUser = {
        nombre : pnombre,
        apellidopaterno : papellidopaterno,
        apellidomaterno : papellidomaterno,
        username : pusername,
        birthday : pbirthday,
        email : pemail,
        password : ppassword,

    };
    console.log(newUser)
    listaUsuarios.push(newUser);
}