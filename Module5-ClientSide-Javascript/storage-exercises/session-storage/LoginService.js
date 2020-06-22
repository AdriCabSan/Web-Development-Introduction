document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion)
function iniciarSesion(){
    let user = {
        nombre: '',
        email: '',
        bAcceso: false
    }
    const correoLogueado = document.querySelector('#txtCorreo').value
    const passwordLogueado = document.querySelector('#txtPassword').value
    user.bAcceso=validarCredenciales(correoLogueado,passwordLogueado)
    if(user.bAcceso==true){
        ingresar()
    }
}

function ingresar(){
    const rol = sessionStorage.getItem('rolUsuarioActivo')
    switch(rol){
        case '1': window.location.href='admin.html'; break
        case '2': window.location.href='cliente.html'; break
        default: window.location.href='index.html'; break
    }
}