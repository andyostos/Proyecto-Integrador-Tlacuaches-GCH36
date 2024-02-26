document.querySelector('#btnSaveVendor').addEventListener('click', saveVendor);

function saveVendor(){
    var sNombre = document.querySelector('#txtNombre').value,
    sApellidoPaterno = document.querySelector('#txtApellidoPaterno').value,
    sApellidoMaterno = document.querySelector('#txtApellidoMaterno').value,
    sUsuario = document.querySelector('#txtUsuario').value,
    sRfc = document.querySelector('#txtRfc').value,
    sBirthday = document.querySelector('#txtBirthday').value,
    sCiudad = document.querySelector('#txtCiudad').value,
    sTipo = document.querySelector('#txtTipo').value,
    sEmail = document.querySelector('#txtEmail').value,
    sPassword = document.querySelector('#txtPassword').value
    

    
    
    addVendedortoSystem(sNombre, sApellidoPaterno,sApellidoMaterno,sUsuario, sRfc, sBirthday, sCiudad, sTipo, sEmail, sPassword);


}