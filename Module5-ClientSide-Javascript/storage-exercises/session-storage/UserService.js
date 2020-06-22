// Roles:
// 1.-admin,
// 2.- cliente

function obtenerListaDeUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'))
    if(listaUsuarios == null){
        listaUsuarios=
        [  //id nombre     apellido     correo                 contraseña  fecha nac  rol
            ['1','Adrian','Cabrera','adriancabsan98@gmail.com','zelda','1998/12/01','1'],
            ['2','El','prisas','sonic@gmail.com','erizoazul','1990/12/01','2']
        ]
    }
    return listaUsuarios
}
function validarCredenciales(pCorreo,pPassword){
    const listaUsuarios=obtenerListaDeUsuarios();
    let bAcceso=false

    listaUsuarios.forEach(usuario => {
        nombreUsuario=usuario[1]
        apellidoUsuario=usuario[2]
        correoUsuario=usuario[3]
        passwordUsuario=usuario[4]
        rolUsuario=usuario[6]

        if(correoUsuario==pCorreo && passwordUsuario==pPassword){
            bAcceso=true
            sessionStorage.setItem('usuarioActivo',`${nombreUsuario} ${apellidoUsuario}`)
            sessionStorage.setItem('rolUsuarioActivo',`${rolUsuario}`)
        }
    });

    return bAcceso
}
