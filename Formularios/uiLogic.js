document.querySelector('#btnSaveUser').addEventListener('click', saveUser);

function saveUser(){
    var sNombre = document.querySelector('#txtNombre').value,
    sApellidoPaterno = document.querySelector('#txtApellidoPaterno').value,
    sApellidoMaterno = document.querySelector('#txtApellidoMaterno').value,
    sBirthday = document.querySelector('#txtBirthday').value,
    sEmail = document.querySelector('#txtemail').value,
    sPassword = document.querySelector('#txtPassword').value
    

    
    
    addUsertoSystem(sNombre, sApellidoMaterno,sApellidoPaterno,sBirthday,sEmail, sPassword);


}
